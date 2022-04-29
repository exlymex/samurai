import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileComponent from "./components/Profile/ProfileComponent";



function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileComponent/>}></Route>
            <Route path='/dialogs/*' element={<DialogsContainer/>}></Route>
            <Route path='/users/*' element={<UsersContainer/>}></Route>
          </Routes>

        </div>
      </div>
    
    </BrowserRouter>)


}


export default App;

// 