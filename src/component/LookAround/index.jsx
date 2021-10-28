/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import imagebg from  "../../assets/imagbg.png";


import './styles.css'

export default function LookAround() {
  return (
    <>
        {/* Look Around Component */}
        
    <div className="look-around">
     <div className="img-container">
     <img src={imagebg} />
     </div>
     <div className="right">
       <h2>Ready to take a look around?</h2>
       <p className="first-para">The ultimate guide to get you up and running with us. We’ll take you <br/> from zero to hero with a practical demo.</p>
        <button>Get Live Demo</button>
        <p>JOIN OUR LIVE DEMO TO FIND OUT HOW TO GET STARTED WITH BREAKING MARS</p>
     </div>
    </div>
    </>
  );
}