import React from "react"
import { addForDialogs,actionsForDialogs } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            let onAddNewDialogs = () => {
                store.dispatch(addForDialogs())
            }
            let showText = (text) => {
                store.dispatch(actionsForDialogs(text))
            }
            return <Dialogs updateNewMessageBody={showText}
                             sendMessage={onAddNewDialogs}
                             messagesPage={store.getState().messagesPage}/>
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer

