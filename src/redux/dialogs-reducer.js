const ADD__NEW__DIALOGS__TEXT = "ADD__NEW__DIALOGS__TEXT"

let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD__NEW__DIALOGS__TEXT: {
            let newText = action.newMessageBody
            return  {
                ...state,
                messages:[...state.messages,{id: 6, message: newText}]
            }
        }
        default :
        return state;
    }
}
export const addForDialogs = (newMessageBody) => ({type: ADD__NEW__DIALOGS__TEXT,newMessageBody})

export default dialogsReducer