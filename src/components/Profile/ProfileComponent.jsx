import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
        usersAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }
    render() {

        return (
            <div>
               <Profile {...this.props} profile = {this.props.profile} />
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
  profile:state.profilePage.profile
})

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));