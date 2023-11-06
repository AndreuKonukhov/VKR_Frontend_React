import logo from './logo.svg';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import sun from './Resources/Center.png'
import luch from './Resources/Luch.png'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wriper'>
        {/* <Header name = 'Андрей'/> */}
        <Navbar />
        <div>
          <img className='sun' src = {sun}/>
          <img className='luch' src = {luch}/>
        </div>

        <div>
          <Routes>
            <Route path='/dialog' element={<Dialog sechen={props.state} />}/>
            <Route path='/profile'element={<Profile sechen={props.state.seches} 
                                                    newPostText = {props.state.newPostText}
                                                    addSech={props.addSech}
                                                    updateNewPostText={props.updateNewPostText}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

