import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, profileThunkCreator, updateStatusThunk} from "../../redux/profile-reducer";
import {
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {compose} from "redux";

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
       if(userId === undefined){
           userId = 2
       }
        this.props.profileThunkCreator(userId)
        this.props.getStatusThunk(userId)
    }
    render() {
        return (
            <div>
               <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus={this.props.updateStatusThunk}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    status:state.profilePage.status
})

export default compose(
    connect(mapStateToProps,{profileThunkCreator,getStatusThunk,updateStatusThunk}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
// let mapStateToPropsForRedirect = (state) => ({
//     isAuth:state.auth.isAuth
// })
// let WithRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
// export default connect(mapStateToProps,{profileThunkCreator})(withRouter(WithRedirectComponent));