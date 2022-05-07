import React from 'react'
import {connect} from "react-redux";
import {
    follow, followThunkCreator, getUsersThunkCreator,
    setCurrentPage,toggleIsFollowingProgress,
    unfollow, unfollowThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
class UsersContainer extends React.Component {
    componentDidMount() {
      //   this.props.toggleIsFetching(true)
      // usersAPI.getUser(this.props.currentPage,this.props.pageSize).then(data => {
      //           this.props.toggleIsFetching(false)
      //           this.props.setUser(data.items)
      //           this.props.setUsersTotalCount(data.totalCount)
      //       })
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUser(pageNumber,this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUser(data.items)
        //
        //     })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator = {this.props.followThunkCreator}
                   unfollowThunkCreator = {this.props.unfollowThunkCreator}
            />
        </>
    }
}

let mapsStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapsStateToProps, {follow,unfollow,setCurrentPage,toggleIsFollowingProgress,getUsersThunkCreator,followThunkCreator,unfollowThunkCreator}
))(UsersContainer)