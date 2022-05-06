
import {profileAPI, usersAPI} from "../api/api";

const ADD__POST = 'ADD__POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
let initialState = {
    posts: [
        { id: 1, message: 'Hi,how are u', likeCount: '1' },
        { id: 2, message: 'It is my first post', likeCount: '15' },
        { id: 3, message: 'It is my first post', likeCount: '16' },
        { id: 4, message: 'It is my first post', likeCount: '18' },
    ],
    newPostText: 'it-kamasutra.com',
    profile:null,
    status:''
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD__POST: {
            let post = {
                likeCount: 5,
                message: action.text,
                Comments: 5
            }
            return {
                ...state,
                posts:[...state.posts,post],
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newPostText
            }
        }
        case SET_USERS_PROFILE: {
            return {...state,profile:action.profile}
        }
        case SET_STATUS: {
            return {...state,status:action.status}
        }
        default:
            return state;
    }

}


export const profileThunkCreator = (userId) => (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
}
export const getStatusThunk = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
}
export const updateStatusThunk = (status) => (dispatch) => {
    debugger
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
}

export const setUserProfile = (profile) => ({type:SET_USERS_PROFILE,profile})
export const addPostActionCreator = (text) => ({type: ADD__POST,text})
export const setStatus = (status) => ({type:SET_STATUS,status})
export default profileReducer