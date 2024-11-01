import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
       <Header />
       <Outlet /> 
       <Sidebar />
    </div>
  );
}

export default App;
