import React, { useState } from 'react';
import './About.scss';
import abtimg from "../../images/about-pic.jpg"

export default function About() {
  const [tab,settab]=useState(1);
  const changetab=(id) =>{
    settab(id);
  }
  return (
    <div id='about-section'>
        <section className='about-inner container'>
            <div className="about-img">
                <img src={abtimg} alt="varun"/>
            </div>
            <div className="about-content">
                <h1>About Me</h1>
                <p>Hello, and welcome to my portfolio! I'm Varun 
                  a passionate and results-driven Front-End Web Developer with a good knowledge in creating engaging and interactive web applications. 
                  The evolving nature of web development keeps me on my toes and inspires me to keep learning.
                   Each day, I embrace the opportunity to tackle new challenges and discover innovative solutions. 
                </p>
                  <div className="tab-menu">
                    <ul>
                      <li className={tab===1 ? "active tab-line" : ""} onClick={()=>{changetab(1)}}>Education</li>
                      <li className={tab===2 ? "active tab-line" : ""} onClick={()=>{changetab(2)}}>Skills</li>
                      <li className={tab===3 ? "active tab-line" : ""} onClick={()=>{changetab(3)}}>Work Experience</li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className={tab===1 ? "show-tab" : "hide-tab"}>
                      <ul>
                        <li>
                          <span>2014 (10th)</span>
                          <br></br>
                          Sree Ayyappa Education Center
                        </li>
                        <li>
                        <span>2016 (12th)</span>
                          <br></br>
                          Sree Ayyappa Education Center and PU College
                        </li>
                        <li>
                        <span>2020 (BE in Computer Science)</span>
                          <br></br>
                          Sambhram Institue of Technology
                        </li>
                      </ul>
                    </div>
                    <div className={tab===2 ? "show-tab" : "hide-tab"}>
                    <ul>
                        <li>
                          <span>Languages</span>
                          <br></br>
                          HTML, CSS, Javascript
                        </li>
                        <li>
                        <span>Front End Libraries</span>
                          <br></br>
                          React , Angular
                        </li>
                        <li>
                        <span>Front End Frameworks and Material UI</span>
                          <br></br>
                            Angular Material ,PrimeNg, Bootstrap ,Tailwind CSS
                        </li>
                      </ul>
                    </div>
                    <div className={tab===3 ? "show-tab" : "hide-tab"}>
                    <ul>
                        <li>
                          <span>Techademy (May 2022)</span>
                          <br></br>
                          <ul className='work-exp'>
                            <li>Developed pixel perfect and responsive web application in angular ensuring  ensuring cross-browser compatibility and optimal performance.</li>
                            <li>Developed and maintained reusable Angular components, optimizing codebase for efficiency.</li>
                            <li>Utilized best practices like code splitting and lazy loading to create lightning-fast websites. </li>
                          </ul>
                        </li>
                    </ul>
                    </div>
                  </div>
            </div>
        </section>
    </div>
  )
}
