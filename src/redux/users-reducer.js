import { act } from "@testing-library/react"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
let initialState = {
    users: [
        { id: 1,photoURL:'https://media.wired.com/photos/62328c272c80bae389480b49/16:9/w_2400,h_1350,c_limit/Volodymyr-Zelensky-Deepfake-Ukraine-Business-1239124035.jpg', followed:false, fullName: 'Pasha', status: "I'm a boss",location: {city: 'Kyiv',country:'Ukraine'} },
        { id: 2,photoURL:'https://media.wired.com/photos/62328c272c80bae389480b49/16:9/w_2400,h_1350,c_limit/Volodymyr-Zelensky-Deepfake-Ukraine-Business-1239124035.jpg', followed:false, fullName: 'Ruslan', status: "I'm a ex-boss",location: {city: 'Lviv',country:'Ukraine'} },
        { id: 3,photoURL:'https://media.wired.com/photos/62328c272c80bae389480b49/16:9/w_2400,h_1350,c_limit/Volodymyr-Zelensky-Deepfake-Ukraine-Business-1239124035.jpg', followed:true, fullName: 'Andriy', status: "I'm a future boss",location: {city: 'Mariupol',country:'Ukraine'} },
        { id: 4,photoURL:'https://media.wired.com/photos/62328c272c80bae389480b49/16:9/w_2400,h_1350,c_limit/Volodymyr-Zelensky-Deepfake-Ukraine-Business-1239124035.jpg', followed:true, fullName: 'Roman', status: "I'm a mega-boss",location: {city: 'Donetsk',country:'Ukraine'} },
    ],
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
            return {...state,users:[...state.users,...action.users]}
        }
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW,userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW,userId})
export const setUserAC = (users) => ({type: SET_USERS,users})

export default usersReducer