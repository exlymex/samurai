import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileComponent from "./components/Profile/ProfileComponent";



function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileComponent/>}></Route>
            <Route path='/profile' element={<ProfileComponent/>}></Route>
            <Route path='/login' element={<ProfileComponent/>}></Route>
            <Route path='/dialogs/*' element={<DialogsContainer/>}></Route>
            <Route path='/users/*' element={<UsersContainer/>}></Route>
          </Routes>

        </div>
      </div>
    
    </BrowserRouter>)


}


export default App;

// 