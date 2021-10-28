/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import stairs from "../../assets/stairs.png";
import table from "../../assets/table.png";
import './styles.css'

export default function WithBreaking() {
  return (
    <>
        {/* With Breaking Component */}

    <div className="with-breaking">
      <div className="flex-container">
        <div className="flex-left">
          <h2>With <span>Breaking Mars</span></h2>
          <img src={stairs} />
        </div>
        <div className="vertical-line"></div>
        <div className="flex-right">
          <h2>Without <span>Breaking Mars</span></h2>
          <img src={table} />
        </div>
      </div>
      <div className="para-container">
        <p>
          As the #1 trusted LinkedIn Automation tool, Breaking Mars safely <br/> finds you qualified leads so you can focus on closing deals - faster
        </p>
    <button>Try 30 days for free</button>
    </div>
    </div>
      
    </>
  );
}
