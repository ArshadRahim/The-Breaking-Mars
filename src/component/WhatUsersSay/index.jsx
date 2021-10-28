/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import photo1 from  "../../assets/Photo1.png";
import photo2 from  "../../assets/Photo2.png";
import photo3 from  "../../assets/Photo3.png";
import photo4 from  "../../assets/Photo4.png";
import photo5 from  "../../assets/Photo5.png";


import './styles.css'

export default function WhatUsersSay() {
  return (
    <>
        {/* What Users Say Component */}
        
    <div className="what-users-say">
      <h2>What Users Say?</h2>
      <div className="quote">
        <p>We had an incredible experience working with Breaking Mars and were impressed they <br/>made such a big difference in only three weeks. Our team is so grateful for the wonderful<br/> improvements they made and their ability to get desired leads so quickly. It acted as a<br/> catalyst to take our community to the next level and get more eyes on our product.</p>
      </div>
      <div className="flex-container">
      <img src={photo1} />
      <img src={photo2} />
      <div className="inner-flex">
      <img src={photo3} />
      <div><h5>Jane Cooper</h5>
      <p>CEO, ABC Corporation</p></div>
      </div>
      <img src={photo4} />
      <img src={photo5} />
      </div>
    </div>
    </>
  );
}