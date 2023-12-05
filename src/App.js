import logo from './logo.svg';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import sun from './Resources/Center.png'
import luch from './Resources/Luch.png'
import NewSechContainer from './components/NewSech/NewSechContainer';
import StartedPage from './components/StartedPage/StartedPage';
import SelectedSechContainer from './components/SelectedSech/SelectedSechContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wriper'>
        <Navbar/>
        {/* <div>
          <img className='sun' src = {sun}/>
          <img className='luch' src = {luch}/>
        </div> */}
        
        <div>
          <Routes>
            <Route path='' element={<StartedPage/>} />
            <Route path='/newSech' element={<NewSechContainer/>} />
            <Route path='/sech/:sech_num' element={<SelectedSechContainer/>} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

