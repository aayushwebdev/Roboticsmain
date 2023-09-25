import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import {Routes, Route} from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <>
    {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
