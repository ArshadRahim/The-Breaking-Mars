/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import automation from  "../../assets/automation 3.png";
import audience from  "../../assets/audience 2.png";
import networking from  "../../assets/networking 2.png";
import search from  "../../assets/search 2.png";


import './styles.css'

export default function UpComingFeatures() {
  return (
    <>
        {/* UpComing Features Component */}
        
    <div className="up-coming-features">
      <h2>Our Upcoming Features</h2>
      <div className="flex-container">
      <div className="inner-flex">
      <img src={automation} />
      <h2>Automate Everything on LinkedIn</h2>
      <p>Send connection request to grow network, view profile to build rappot, endorse prospect to get noticed- all automatically. </p>
      </div>
      <div className="inner-flex">
      <img src={audience} />
      <h2>Automate Everything on LinkedIn</h2>
      <p>Send connection request to grow network, view profile to build rappot, endorse prospect to get noticed- all automatically. </p>
      </div>
      <div className="inner-flex">
      <img src={networking} />
      <h2>Automate Everything on LinkedIn</h2>
      <p>Send connection request to grow network, view profile to build rappot, endorse prospect to get noticed- all automatically. </p>
      </div>
      <div className="inner-flex">
      <img src={search} />
      <h2>Automate Everything on LinkedIn</h2>
      <p>Send connection request to grow network, view profile to build rappot, endorse prospect to get noticed- all automatically. </p>
      </div>
      </div>
      <div className="get-free-goodies">
        <p>We’re offering you more than 30Days Messages & Post Template fully free</p>
        <button>Get Free Goodies</button>
      </div>
    </div>
    </>
  );
}