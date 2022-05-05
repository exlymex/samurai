import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
  return (
    <div >
      <div>
        <img src='https://html5css.ru/css/img_lights.jpg'></img>
      </div>
      <div className={s.description}>
          <img src={props.profile.photos.large}/>
          <div>{props.profile.fullName}</div>
          <ProfileStatus status ={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}
export default ProfileInfo