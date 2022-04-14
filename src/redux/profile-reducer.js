import { act } from "@testing-library/react"

const ADD__POST = 'ADD__POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Hi,how are u', likeCount: '1' },
        { id: 2, message: 'It is my first post', likeCount: '15' },
        { id: 3, message: 'It is my first post', likeCount: '16' },
        { id: 4, message: 'It is my first post', likeCount: '18' },
    ],
    newPostText: 'it-kamasutra.com'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD__POST:
            let user = {
                likeCount: 5,
                message: state.newPostText,
                Comments: 5
            }
            state.posts.push(user)
            state.newPostText = ''
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state;

        default:
            return state;
}
}

export const addPostActionCreator = () => ({type: ADD__POST})
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,newPostText: text
})
export default profileReducer