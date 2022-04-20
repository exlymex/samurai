import React from "react"
import { addForDialogs,actionsForDialogs } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
           dispatch(actionsForDialogs(text))
        },
        sendMessage: (text) => {
            dispatch( addForDialogs())

        }
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer

