import React from "react";
import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img src='https://html5css.ru/css/img_lights.jpg'></img>
      </div>
      <div className={s.description}>
        ava + description
      </div>
    </div>
  )
}
export default ProfileInfo