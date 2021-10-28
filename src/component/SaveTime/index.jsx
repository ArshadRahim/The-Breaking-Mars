/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './styles.css'

export default function SaveTime() {
  return (
    <>
        {/* Save Time Component */}

    <div className="save-time">
      <h2 className="head">Want to know how much time <br></br> Breaking Mars will save you?</h2>
      <p className="para">Enter the number of leads you'd like to contact</p>
      <div className="flex-container">
     <div className="left container">
       <p>
       Enter Leads you want to <br></br> connect with <span className="bold"> per day </span>
       </p>
       <h2>24</h2>
       <div className="line"></div>
     </div>
     <div className="right container">
     <p>
     Time Saved <span className="bold"> per Month </span>
       </p>
       <h2>5 <span>days</span></h2>
     </div>
      </div>
    </div>
      
    </>
  );
}
