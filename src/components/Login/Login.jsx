import React from "react";
import {Button, Form, Schema} from "rsuite";
import {useRef, useState} from "react";
import {Field} from "../RSUITE components/rsuiteComp";

const LoginReduxForm = ({onSubmit}) => {
    const {StringType, NumberType} = Schema.Types;
    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        onSubmit(formValue.name)
    };
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        name: "",
        password : ''
    });
    const model = Schema.Model({
        name:StringType()
            .isRequired('This field is required.')
            .minLength(2,'Min = 2')
    });
    return(
        <div>
            <Form
                ref={formRef}
                formValue={formValue}
                onChange={setFormValue}
                onCheck={setFormError}
                formError={formError}
                model = {model}
            >
                <Field component = 'textarea' name="name" label="Your name"/>
                <Field component = 'textarea' name="password" label="Your password"/>
                <Form.Group>
                    <Button  color="violet" appearance="ghost" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return(
        <div>
            <h1>Form</h1>
           <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}
export default Login