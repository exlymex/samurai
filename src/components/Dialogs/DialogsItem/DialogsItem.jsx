import React from "react";
import s from './DialogsItem.module.css'
import { NavLink } from "react-router-dom";
const DialogsItem = (props)=> {
    let path = 'dialogs/' + props.id
    return (<div className={dialAct => dialAct.isActive ? s.dialogsItemsActive : s.dialogsItems}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}
export default DialogsItem