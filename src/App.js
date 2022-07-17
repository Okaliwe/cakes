import {Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Home from './component/home';
import Caro from './component/carousel';
import About from './component/about';
import Services from './component/quality';
import Contact from './component/contact';



function App() {
  return (
    <div>
      <Navbar/>
      <Caro/>
      <Routes>
        <Route  path='*'element={<Home/>}/>
        <Route  path= 'about'element={<About/>}/>
        <Route  path= 'quality'element={<Services/>}/>
        <Route  path= 'contact'element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
