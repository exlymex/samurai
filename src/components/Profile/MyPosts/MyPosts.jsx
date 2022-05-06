import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Button, Form, Input, InputNumber, Schema} from "rsuite";
import { useEffect, useRef, useState } from "react";
import {Field} from "../../RSUITE components/rsuiteComp";
import model from '../../../validator/validator'

const MyPosts = (props) => {
  let showPosts = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)
  let onAddPost = (values) => {
    props.changeText(values)
    // props.dispatch(addPostActionCreator())
  }
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
          <AddNewPostForm onSubmit={onAddPost}/>
      </div>
      <div className={s.posts}>
        {showPosts}
      </div>
    </div>

  )
}

const AddNewPostForm = ({onSubmit}) => {

        const handleSubmit = () => {
            if (!formRef.current.check()) {
                return;
            }
            onSubmit(formValue.text)
        };
        const formRef = useRef();
        const [formError, setFormError] = useState({});
        const [formValue, setFormValue] = useState({
            text: "",
        });
        return(
            <div>
                <Form
                    ref={formRef}
                    formValue={formValue}
                    onChange={setFormValue}
                    onCheck={setFormError}
                    formError={formError}
                    model={model}
                >
                    <Field component = 'textarea' name="text" label="Your name"/>
                    <Form.Group>
                        <Button  color="violet" appearance="ghost" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
export default MyPosts
