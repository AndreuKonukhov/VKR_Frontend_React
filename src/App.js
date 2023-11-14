import logo from './logo.svg';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import NewSech from './components/NewSech/NewSech';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import sun from './Resources/Center.png'
import luch from './Resources/Luch.png'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wriper'>
        <Navbar/>
        {/* <div>
          <img className='sun' src = {sun}/>
          <img className='luch' src = {luch}/>
        </div> */}
        
        {/* <div>
          <Routes>
            <Route path='/newSech' element={<NewSech newSechText={props.state.navbar.newSechText} dispatch={props.dispatch} />} />
          </Routes>
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

