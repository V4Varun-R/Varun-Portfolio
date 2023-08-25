import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../images/varun-rename.svg";
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from "react-router-dom";
import Contact from '../../Pages/Contact/Contact';
import Projects from '../../Pages/Project/Projects';
export default function Navbar() {
  const [viewmenu , setviewmenu]= useState(false);
  const openmenu = () => {
      setviewmenu(true);
      console.log("open menu");
  }
  const closemenu = () => {
      setviewmenu(false);
      console.log("close menu");
  }
  return (
    <div className="navbar-section">
        <nav className="container navbar"> 
            <img src={logo} alt="Varun-logo" className='logo-img'></img>
            <ul className={viewmenu ? "navbar-items show" : "navbar-items"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li>About</li>
                <li>Services</li>
                <li><NavLink to="/projects">Project</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <i className="bi bi-x-lg" onClick={closemenu}></i>
            </ul>
            <i className="bi bi-list" onClick={openmenu}></i>
        </nav>
    </div>
  )
}
