import React from 'react';
import './Banner.css';
import cbanner from "../../images/coding-banner-img.jpg"

export default function Banner() {
  return (
    <div className='banner-section container'>
      <div className="banner-content">
        <h3>UI Developer</h3>
        <h1>Hi,I'm <span>Varun</span> </h1>
        <h1>From Bangalore ,India</h1>
      </div>
      <div className='banner-img'>
          <img src={cbanner} alt="banner"/>
      </div> 
    </div>
    
  )
}
