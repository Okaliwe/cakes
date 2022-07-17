import {NavLink} from "react-router-dom";
import { useState, } from 'react'
import {Routes,Route } from 'react-router-dom';
import img3 from './images/closeup-shot-vanilla-cake-with-chocolate-drip-flowers-top.jpg'
import './home.css'
import Makeup from './container/makeup';
import Makeup1 from './container/makeup1';
import Makeup2 from './container/makeup2';
import Makeup3 from './container/makeup3';
import Makeup4 from './container/makeup4';
import Makeup5 from './container/makeup5';
import Makeup6 from './container/makeup6';
import Makeup7 from './container/makeup7';
import Makeup8 from './container/makeup8';
import Makeup9 from './container/makeup9';
import img4 from './images/delicious-sweet-cake-with-strawberries-baiser-plate.jpg'
import img5 from './images/pieces-honey-cake-white-background.jpg'
import img6 from './images/chocolate-cake-with-chocolate-sprinkles.jpg'
import img7 from './images/nickie-joseph-T6oD9CIlpGA-unsplash.jpg'
import img8 from './images/Screenshot_20220708-213056_1.png'
import img9 from './images/Screenshot_20220708-213027_1.png'
import img10 from './images/Screenshot_20220708-213136_1.png'
import img11 from './images/Screenshot_20220708-213104_1.png'
import img12 from './images/Screenshot_20220708-213158_1.png'
const Home = () => {
    const[isOpen,SetOpen]=useState(true)
    const wish =()=>{
        SetOpen(!isOpen)
    }
    return ( 
        <div className="container">
        <NavLink onClick={wish}  to="makeup">
            <img
                className="wel"
                src={img3} alt='image'
            /> 
         </NavLink>
         {
            isOpen && <Routes>
            <Route  path= 'makeup'element={<Makeup/>}/>
            </Routes>
         }
         
         <NavLink onClick={wish} to="makeup1">
            <img
                className="wel"
                src={img4}
                alt='image'
            /> 
         </NavLink>
         {
            isOpen && <Routes>
            <Route  path= 'makeup1'element={<Makeup1/>}/>
            </Routes>
         }
         
         <NavLink onClick={wish} to="makeup2">
            <img
                className="wel"
                src={img5} alt='image'
            /> 
         </NavLink>
         {
            isOpen &&  <Routes>
            <Route  path= 'makeup2'element={<Makeup2/>}/>
            </Routes>
         }
        <div className="unique">
            <h1 id='make'>We <br/>make <br/> you<br/> unique.</h1>
        </div>
         <NavLink onClick={wish} to="makeup3">
            <img
                className="wel"
                src={img6} alt='image'
            /> 
         </NavLink>
         {
            isOpen &&  <Routes>
            <Route  path= 'makeup3'element={<Makeup3/>}/>
            </Routes>
         }

         <NavLink onClick={wish} to="makeup4">
            <img
                className="wel"
                src={img7} alt='image'
            /> 
         </NavLink>
         {
            isOpen &&  <Routes>
            <Route  path= 'makeup4'element={<Makeup4/>}/>
            </Routes>
         }

         <NavLink onClick={wish} to="makeup5">
            <img
                className="wel"
                src={img8} alt='image'
            /> 
         </NavLink>
         {
            isOpen &&  <Routes>
            <Route  path= 'makeup5'element={<Makeup5/>}/>
            </Routes>
         }

         <NavLink onClick={wish} to="makeup6">
            <img
                className="wel"
                src={img9} alt='image'
            /> 
         </NavLink>
         {
            isOpen &&  <Routes>
            <Route  path= 'makeup6'element={<Makeup6/>}/>
            </Routes>
         }

         <NavLink onClick={wish} to="makeup7">
            <img
                className="wel"
                src={img10} alt='image'
            /> 
         </NavLink>
         {
            isOpen && <Routes>
            <Route  path= 'makeup7'element={<Makeup7/>}/>
            </Routes>
         }
         
         <NavLink onClick={wish} to="makeup8">
            <img
                className="wel"
                src={img11} alt='image'
            /> 
         </NavLink>
         {
            isOpen &&          <Routes>
            <Route  path= 'makeup8'element={<Makeup8/>}/>
            </Routes>
         }

         <NavLink  onClick={wish} to="makeup9">
            <img
                className="wel"
                src={img12} alt='image'
            /> 
         </NavLink>
         {
            isOpen &&  <Routes>
            <Route  path= 'makeup9'element={<Makeup9/>}/>
            </Routes>
         }
        </div>
     );
}
 
export default Home;