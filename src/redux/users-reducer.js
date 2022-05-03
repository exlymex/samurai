import {act} from "@testing-library/react"
import {usersAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage:1,
    isFetching: true,
    followingInProgress:[]
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users : state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u,followed:true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users : state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u,followed:false}
                    }
                    return u
                })
            }
        case SET_USERS : {
            return {...state,users: action.users}
        }
        case SET_CURRENT_PAGE : {
            return {...state,currentPage:action.currentPage }
        }
        case SET_TOTAL_COUNT : {
            return {...state,totalUserCount:action.totalCount}
        }
        case TOGGLE_IS_FETCHING : {
            return{...state,isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return{...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress,action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]}
        }
        default:
            return state;
    }

}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUser = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
export default usersReducer

export const getUsersThunkCreator = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUser(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUser(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        usersAPI.deleteFollow(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toggleIsFollowingProgress(false, id))
            })
    }
}
export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        usersAPI.postFollow(id)
            .then(data => {
                if (data.resultCode == 0) {
                   dispatch(follow(id))
                }
               dispatch(toggleIsFollowingProgress(false, id))
            })
    }
}

