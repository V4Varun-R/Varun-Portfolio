import React from 'react';
import './Banner.css';
import cbanner from "../../images/picofme (2).png"
import Button from '../Button/Button';

export default function Banner() {
  return (
    <div className='banner-section container'>
      <div className="banner-content">
          <h1>Hi,I'm <span>Varun</span> </h1>
          <h1>From Bangalore ,India</h1>
          <h3>I am a Front End Web Developer</h3>
          <p>I have 1 year experinece in ForntEnd web Development.I love to develop web applications using technologies like React,Bootstrap and Tailwind CSS.</p>
          <div class="btn-container">
           <a href="#about-section"><Button name="About Me"></Button></a> 
            <Button name="Download CV"></Button>
          </div>
      </div>
      <div className='banner-img'>
          <img src={cbanner} alt="banner"/>
      </div> 
    </div>
  )
}
