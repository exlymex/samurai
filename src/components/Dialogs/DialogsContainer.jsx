import React from "react"
import { addForDialogs,actionsForDialogs } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
           dispatch(actionsForDialogs(text))
        },
        sendMessage: () => {
            dispatch( addForDialogs())

        }
    }
}
const AuthRedirectDialogs = WithAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectDialogs)

export default DialogsContainer

