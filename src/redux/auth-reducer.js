import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
   userId:null ,
    email:null,
    login:null,
    isAuth:false

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA : {
            return{
                ...state,
               ...action.payload,
             }
        }
        default :
           return state;
    }
}

export const setUserData = (userId,email,login,isAuth) => ({
    type: SET_USER_DATA,payload:{userId,email,login,isAuth}
}) 

export const authThunkCreator = () => (dispatch) =>{
    usersAPI.getAuthMe()
        .then(data => {
            if(data.resultCode === 0){
                let {id,login,email} = data.data;
                dispatch(setUserData(id,email,login,true))
            }

        })
}
export const login = (email,password) => (dispatch) =>{
    authAPI.login(email,password)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(authThunkCreator())
            }

        })
}
export const logout = () => (dispatch) =>{
    authAPI.logout()
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setUserData(null,null,null,false))
            }

        })
}
export default authReducer