//import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.js';
import Contactus from './components/Contactus/Contactus.js';
import About from './components/About/About.js';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
      <Routes>
      <Route exact path="/home"element={<Home/>}/>
      <Route exact path="/contactus"element={<Contactus/>}/>
      <Route exact path="/about"element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
