import React from "react";
import {Button, Form, Schema} from "rsuite";
import {useRef, useState} from "react";
import {Field} from "../RSUITE components/rsuiteComp";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
const LoginReduxForm = ({onSubmit}) => {
    const {StringType, NumberType} = Schema.Types;
    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        onSubmit(formValue )
    };
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        email: "",
        password : ''
    });
    const model = Schema.Model({
        email:StringType()
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
                <Field component = 'textarea' name="email" label="Your email"/>
                <Field type = 'password' component = 'textarea' name="password" label="Your password"/>
                <Form.Group>
                    <Button  color="violet" appearance="ghost" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password)
    }
    if(props.isAuth){
        return <Navigate to={'/profile'}></Navigate>
    }
    return(
        <div>
            <h1>Form</h1>

           <LoginReduxForm onSubmit = {onSubmit}/>
            {props.isMistake && <div>Incorrect email or password</div>}
        </div>
    )
}
const mapsStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    isMistake: state.auth.isMistake
})
export default connect(mapsStateToProps,{login})(Login)