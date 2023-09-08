import React from 'react';
import './Banner.scss';
import cbanner from "../../images/picofme (2).png"
import Button from '../Button/Button';
import resume from "../../images/varun_resume.docx";

export default function Banner() {
  return (
    <div className='banner-section container'>
      <div className="banner-content">
          <h1>Hi,I'm <span>Varun</span> </h1>
          <h1>From Bangalore ,India</h1>
          <h3>I am a <span className='front-end'>Front End Web Developer</span></h3>
          <p className='banner-info'>I have 1 year experinece in ForntEnd web Development.I love to develop web applications using technologies like React,Bootstrap and Tailwind CSS.</p>
          <div className="btn-container">
           <a href="#about-section" className='about-me-btn'><Button name="About Me"></Button></a> 
           <a href={resume} download className='download-cv-btn'><Button name="Download CV"></Button></a> 
          </div>
      </div>
      <div className='banner-img'>
          <img src={cbanner} alt="banner"/>
      </div> 
    </div>
  )
}
