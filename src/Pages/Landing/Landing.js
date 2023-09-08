import React from 'react';
import './Landing.scss';
import Banner from "../../Components/Banner/Banner";
import About from '../../Components/About/About';

export default function Landing() {
  return (
    <div id="landing-page">  
        <Banner/>
        <About/>
    </div>
  )
}
