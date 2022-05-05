import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile = {props.profile} status={props.status} updateStatus={props.updateStatusThunk} />
      <MyPostsContainer store = {props.store} />
    </div>
  )
}
export default Profile