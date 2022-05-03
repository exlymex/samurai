import React from "react";
import a from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import {followThunkCreator, unfollowThunkCreator} from "../../redux/users-reducer";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && a.selectedPage}>{p}</span>
                })}


            })
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}` }>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={a.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=> id === u.id)}  onClick={() => {
                               props.unfollowThunkCreator(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                               props.followThunkCreator(u.id)

                            }}>follow</button>}
                    </div>
                </span>
                    <span>
                     <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                     </span>
                      <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}

export default Users