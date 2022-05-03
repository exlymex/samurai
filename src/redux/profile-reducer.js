
import {usersAPI} from "../api/api";

const ADD__POST = 'ADD__POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
let initialState = {
    posts: [
        { id: 1, message: 'Hi,how are u', likeCount: '1' },
        { id: 2, message: 'It is my first post', likeCount: '15' },
        { id: 3, message: 'It is my first post', likeCount: '16' },
        { id: 4, message: 'It is my first post', likeCount: '18' },
    ],
    newPostText: 'it-kamasutra.com',
    profile:null
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD__POST: {
            let user = {
                likeCount: 5,
                message: state.newPostText,
                Comments: 5
            }
            return {
                ...state,
                posts:[...state.posts,user],
                newPostText : ''
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

export const setUserProfile = (profile) => ({type:SET_USERS_PROFILE,profile})
export const addPostActionCreator = () => ({type: ADD__POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,newPostText: text
})
export default profileReducer