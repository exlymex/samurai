import React from "react"
import { addForDialogs,actionsForDialogs } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch( addForDialogs(newMessageBody))

        }
    }
}

// const AuthRedirectDialogs = WithAuthRedirect(Dialogs)
//
//
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectDialogs)
//
// export default DialogsContainer
//
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
