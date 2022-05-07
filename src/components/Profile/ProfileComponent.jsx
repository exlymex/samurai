import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, profileThunkCreator, updateStatusThunk} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {compose} from "redux";
import {Navigate} from "react-router-dom";
export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
           if(!userId){
               return <Navigate to={'/login'}/>
           }
        }
        this.props.profileThunkCreator(userId)
        this.props.getStatusThunk(userId)
    }
    render() {
        return (
               <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus={this.props.updateStatusThunk}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth
})

export default compose(
    connect(mapStateToProps,{profileThunkCreator,getStatusThunk,updateStatusThunk}),
    withRouter,
)(ProfileContainer)
