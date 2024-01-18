import './App.css'
import store from './redux/redux-store';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import sun from './Resources/Center.png'
import luch from './Resources/Luch.png'
import NewSechContainer from './components/NewSech/NewSechContainer';
import StartedPage from './components/StartedPage/StartedPage';
import SelectedSechContainer from './components/SelectedSech/SelectedSechContainer';
import { Provider } from "react-redux";
import Auth from './components/Auth/Auth';

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app-wriper'>
          {/* <Auth/> */}
          <Navbar />
          {/* <div>
          <img className='sun' src = {sun}/>
          <img className='luch' src = {luch}/>
          </div> */}

          <Routes>
            <Route path='' element={<StartedPage />} />
            <Route path='/newSech' element={<NewSechContainer />} />
            <Route path='/sech/:sech_num' element={<SelectedSechContainer />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

