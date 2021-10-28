/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import png1 from "../../assets/pngfind 1.png";
import png2 from "../../assets/pngfind 2.png";
import './styles.css'

export default function AutomationTools() {
  return (
    <>
        {/* Automation Component */}
        
    <div className="automation-tools">
      <h4>Best Automation tools for linkedin</h4>
      <div className="flez">
        <div><p>Based on 365 reviews</p></div>
        <img src={png1} />
        <img className="trust-pilot" src={png2} />
      </div>
    </div>
      


    </>
  );
}
