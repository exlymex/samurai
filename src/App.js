import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileComponent, {withRouter} from "./components/Profile/ProfileComponent";
import Login from "./components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
      componentDidMount() {
        this.props.initializeApp()
      }
        render(){
          if(!this.props.initialized) {
              {
                  return <Preloader/>
              }
          }
        
          return (
          <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
              <Routes>
                <Route path='/profile/:userId' element={<ProfileComponent/>}></Route>
                <Route path='/profile' element={<ProfileComponent/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/dialogs/*' element={<DialogsContainer/>}></Route>
                <Route path='/users/*' element={<UsersContainer/>}></Route>
              </Routes>

            </div>
          </div>

      )
  }
}
const mapsStateToProps = (state) => ({
    initialized: state.app.initialized
}                                    )
 export default compose(
     withRouter,
     connect(mapsStateToProps,{initializeApp}))(App);

// 