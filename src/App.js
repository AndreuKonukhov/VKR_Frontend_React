import logo from './logo.svg';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className='app-wriper'>
        {/* <Header name = 'Андрей'/> */}
        <Navbar />
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

