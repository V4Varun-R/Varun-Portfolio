import React, { useState } from 'react';
import './About.css';
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sapiente, veniam? Quis cumque nulla, pariatur odio ex molestiae repudiandae alias eos quas suscipit 
                  inventore sapiente tempore impedit facilis praesentium eveniet, aliquid veniam. 
                  Explicabo magni laudantium dicta, reprehenderit vitae cum necessitatibus quo reiciendis iure distinctio! 
                  Ratione, temporibus debitis dolorum quod veniam at.</p>
                  <div className="tab-menu">
                    <ul>
                      <li className={tab===1 ? "active" : ""} onClick={()=>{changetab(1)}}>Education</li>
                      <li className={tab===2 ? "active" : ""} onClick={()=>{changetab(2)}}>Skills</li>
                      <li className={tab===3 ? "active" : ""} onClick={()=>{changetab(3)}}>Work Experience</li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className={tab===1 ? "show-tab" : "hide-tab"}>Education Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, corrupti!</div>
                    <div className={tab===2 ? "show-tab" : "hide-tab"}>Skills Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, corrupti!</div>
                    <div className={tab===3 ? "show-tab" : "hide-tab"}>Work Experience</div>
                  </div>
            </div>
        </section>
    </div>
  )
}
