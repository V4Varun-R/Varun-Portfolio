import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../images/varun-rename.svg";
import {NavLink} from "react-router-dom";
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
                <i className="bi bi-x-lg" onClick={closemenu}></i>
                <li><NavLink to="/Varun-Portfolio" end>Home</NavLink></li>
                <li>Services</li>
                <li><NavLink to="/projects">Project</NavLink></li>
                <li><NavLink to="/contact" >Contact</NavLink></li>
                
            </ul>
            <i className="bi bi-list" onClick={openmenu}></i>
        </nav>
    </div>
  )
}