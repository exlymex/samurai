import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile  />}></Route>
            <Route path='/dialogs/*' element={<DialogsContainer  />}></Route>
            {/* <Route path = '/news' element={<Profile />}></Route>
      <Route path = '/music' element={<Dialogs />}></Route>
      <Route path = '/settings' element={<Dialogs />}></Route> */}
          </Routes>

        </div>
      </div>
    
    </BrowserRouter>)


}


export default App;

// 