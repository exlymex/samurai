import React from "react"
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./Message/Message"
import {Navigate} from "react-router-dom";
const Dialogs = (props) => {

    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(dialog => <DialogsItem name={dialog.name} key = {dialog.id} id={dialog.id} />)
    let messagesElements = state.messages.map(message => <Message message={message.message} key = {message.id}/>)
    let newMessageBody = state.newDialogsText

    let addNewDialogs = () =>{
      props.sendMessage()
    }
    let showText = (e) => {
        let text = e.target.value
        props.updateNewMessageBody(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div>{messagesElements}</div> 
               <div>
                   <div><textarea value = {newMessageBody} 
                   placeholder = 'Enter your message' 
                   onChange = {showText}></textarea></div>
                   <div><button onClick={addNewDialogs}>add</button></div>
               </div>
            </div>
        </div>
    )
}
export default Dialogs

