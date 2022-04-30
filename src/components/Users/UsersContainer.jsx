import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUser,
    setUsersTotalCount,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
      usersAPI.getUser(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUser(data.items)
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUser(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUser(data.items)

            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}

let mapsStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}
// let mapsDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching : (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
export default connect(mapsStateToProps,
    {follow,unfollow,setUser,setCurrentPage,
                    setUsersTotalCount,toggleIsFetching,
                     toggleIsFollowingProgress
    })(UsersContainer)