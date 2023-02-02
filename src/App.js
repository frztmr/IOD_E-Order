
//REACT REQUIREMENT
import logo from './logo.svg';
import './App.css';

//COMPONENTS
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';



//PAGES
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';

//REACT-ROUTER
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div
        style={{ position: "absolute" }}
        className='w-100'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        {/* <Route path='/' element={ } /> */}
        {/* <Route path='/' element={ } /> */}
        {/* <Route path='/' element={ } /> */}
      </Routes>
    </div>
  );
}

export default App;
