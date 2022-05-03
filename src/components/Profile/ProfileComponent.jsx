import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { Navigate, Outlet } from "react-router-dom";
import {connect} from "react-redux";
import {profileThunkCreator} from "../../redux/profile-reducer";
import {
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Login from "../Login/Login";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.profileThunkCreator(userId)
    }
    render() {
        if(!this.props.isAuth){
            return(
                <Navigate to={'/login'} />
            )
        }

        return (
            <div>
               <Profile {...this.props} profile = {this.props.profile} />
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
  profile:state.profilePage.profile,
  isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{profileThunkCreator})(withRouter(ProfileContainer));