import React from 'react'
import Users from "./UsersС";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {followAC, setCurrentPageAC, setUserAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";

let mapsStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage
    }
}
let mapsDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage : (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount : (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(Users)