import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile = {props.profile} />
      <MyPostsContainer store = {props.store} />
    </div>
  )
}
export default Profile