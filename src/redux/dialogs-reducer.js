const UPDATE__NEW__DIALOGS__TEXT = "UPDATE__NEW__DIALOGS__TEXT"
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
    newDialogsText : 'Avada'
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE__NEW__DIALOGS__TEXT : {
            return{
                ...state,
                 newDialogsText:action.dialogs
             }
        }
        case ADD__NEW__DIALOGS__TEXT: {
            let newText = state.newDialogsText
            return  {
                ...state,
                newDialogsText : '',
                messages:[...state.messages,{id: 6, message: newText}]
            }
        }
        default :
        return state;
    }
}

export const actionsForDialogs = (text) => ({
    type: UPDATE__NEW__DIALOGS__TEXT,dialogs:text
}) 
export const addForDialogs = () => ({type: ADD__NEW__DIALOGS__TEXT}) 

export default dialogsReducer