import {authAPI, usersAPI} from "../api/api";
import {authThunkCreator} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED"

let initialState = {
   initialized:false ,
    email:null,
    login:null,
    isAuth:false,
    isMistake: false

}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED : {
            return{
                ...state,
              initialized:true,
             }
        }
        default :
           return state;
    }
}

export const InitializedSuccess = () => ({
    type: SET_INITIALIZED
})

export const initializeApp = () => (dispatch) =>{
    let promise = dispatch(authThunkCreator())
    promise.then(() => {
        dispatch(InitializedSuccess())
    })

}
export default appReducer