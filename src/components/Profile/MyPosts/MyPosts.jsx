import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
  let showPosts = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)
  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator())
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
    // let action = updateNewPostTextActionCreator(text)
    // props.dispatch(action)
  }
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {showPosts}
      </div>
    </div>

  )
}
export default MyPosts
