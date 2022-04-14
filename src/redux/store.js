import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi,how are u', likeCount: '1' },
                { id: 2, message: 'It is my first post', likeCount: '15' },
                { id: 3, message: 'It is my first post', likeCount: '16' },
                { id: 4, message: 'It is my first post', likeCount: '18' },
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagesPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are u' },
                { id: 3, message: 'Nice' },
                { id: 4, message: 'Bad' },
            ],
            dialogs: [
                { id: 1, name: 'Pasha' },
                { id: 2, name: 'Andriy' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Masha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Artur' },
            ],
            newDialogsText : 'Avada'
        },
        sidebar: [
            {}
        ],
    },
    getState() {
        return this._state
    },
    _callSubscribe() {
        console.log('State was changed')
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },
    dispatch(action) { // {type: 'ADD-POST'}
        //    debugger
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)
        this._callSubscribe(this._state)
    },

}

export default store
