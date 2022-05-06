import React from "react"
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./Message/Message"
import {Button, Form, Input, InputNumber, Schema} from "rsuite";
import { useEffect, useRef, useState } from "react";
import {Field} from "../RSUITE components/rsuiteComp";
const Dialogs = (props) => {

    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(dialog => <DialogsItem name={dialog.name} key = {dialog.id} id={dialog.id} />)
    let messagesElements = state.messages.map(message => <Message message={message.message} key = {message.id}/>)

    const addNewMessage = (values) => {
        props.sendMessage(values)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div>{messagesElements}</div>
                <AddMessageForm onSubmit = {addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = ({onSubmit}) => {
    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        onSubmit(formValue.name)
        console.log("formValue", formValue)
    };
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        name: "",
    });
    return(
        <div>
          <Form
            ref={formRef}
            formValue={formValue}
            onChange={setFormValue}
            onCheck={setFormError}
            formError={formError}
        >
            <Field component = 'textarea' name="name" label="Your name"/>
              <Form.Group>
                  <Button  color="violet" appearance="ghost" onClick={handleSubmit}>
                      Submit
                  </Button>
              </Form.Group>
          </Form>
        </div>
    )
}

export default Dialogs

