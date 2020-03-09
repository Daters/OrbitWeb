import React from 'react';
import logo from '../../Logo.png';
import {Link} from "react-router-dom"
import "./Header.css";

//This is the header used for most pages, import from here and name the component "Header"

const Header  =() => (
    <header className="App-header">
    <div className = "navbar1">
      <a className = "logo" href ="/"><img src = {logo} alt ="Logo couldn't load, try refreshing the page!"/></a> 
      
      <ul className = "links">
          <li className = "option" ><Link to = "/mission">Current Mission</Link></li>
          <li className = "option" ><Link to = "/about">About Us</Link></li>
          <li className = "option" ><Link to = "/team">The Team</Link></li>
          <li className = "option" ><Link to = "#">Sponsors</Link></li>
          <li className = "option" ><Link to = "#">Join</Link></li>
          <li className = "option" ><Link to = "#">Contact Us</Link></li>
          
      </ul>
    </div>
    </header>
);

export default Header;