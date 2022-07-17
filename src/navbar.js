import {NavLink} from "react-router-dom";
import OutsideClickHandler from 'react-outside-click-handler';
import React from "react"
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'
const Navbar = () => {
    const[active,SetActive]=useState('nav_menu')
    const [scrolled,setScrolled]=useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset < 200 ){
          setScrolled(false);
        }
        else{
          setScrolled(true);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
     let navbarClasses=['nav'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }
    const navToggle=()=>{
        active==='nav_menu'?SetActive('nav_menu nav_active'):SetActive('nav_menu');
    }
    return ( 
        <header>
            <nav className={navbarClasses.join(" ")}>
                <h3><NavLink className='fill' to="/"> cakes</NavLink></h3>
                <ul className={active}>
                   <li><NavLink className='lin' to="/">Production</NavLink></li>
                    <div id="caret"><FontAwesomeIcon icon={faCaretDown} /></div>
                    <li><NavLink className='lin' to="about">About us</NavLink></li>
                    <div id="caret"><FontAwesomeIcon icon={faCaretDown} /></div>
                    <li><NavLink className='lin' to="quality">Quality</NavLink></li>
                    <div id="caret"><FontAwesomeIcon icon={faCaretDown} /></div>
                    <li><NavLink className='lin' to="contact">Contact</NavLink></li>
                </ul>
                <div  onClick={navToggle} className='font'>
                  <OutsideClickHandler onOutsideClick={()=>{
                    SetActive(false)
                  }}>
                    <div>
                        <FontAwesomeIcon icon={faBars} />   
                    </div>
                  </OutsideClickHandler>
                </div>
                
            </nav>
            
        </header>
     );
}
 
export default Navbar;