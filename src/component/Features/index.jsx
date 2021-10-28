/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import linked from "../../assets/linked.png";
import './styles.css'

export default function Features() {
  return (
    <>
        {/* Features Component */}
        
    <div className="features">
      <h2>Our Features, Your Benefits</h2>
      <div className="grid-container">
      <div className="flex-container box-1">
        <img src={linked} />
        <h2> Likendin auto <br></br> connection sender</h2>
        <p> LinkedIn groups and events, as well as built-in LinkedIn search and interfaces with other tools. Breaking Mars offers everything you need to find and acquire the best connectors for expanding your pipeline. </p>
      </div>
      <div className="flex-container box-2">
        <img src={linked} />
        <h2> LinkedIn Profile views &  <br></br>endorsement</h2>
        <p> Use profile views, endorsements,  connection requests, LinkedIn messages, InMails, Emails, and Twitter DMs to engage your prospects. Personalize your sequences based on how people respond. </p>
      </div>
      <div className="flex-container box-3">
        <img src={linked} />
        <h2> Content Creation For <br></br>Social Media</h2>
        <p> Breaking Mars performance can help you improve the outcomes of your social media contents. Make your own contents to reach out more leads & be more well-known on social networking sites. </p>
        <button>Upcoming</button>
      </div>
      <div className="flex-container box-4">
        <img src={linked} />
        <h2> Create auto audience<br></br> Manually or A.I</h2>
        <p> Breaking Mars offers you to create your own audience manually to achieve the goal of finding propspects. </p>
        <button>Upcoming</button>
      </div>
      <div className="flex-container box-5">
        <img src={linked} />
        <h2>Advanced CRM </h2>
        <p> LinkedIn groups and events, as well as built-in LinkedIn search and interfaces with other tools. Breaking Mars offers everything you need to find and acquire the best connectors for expanding your pipeline. </p>
      </div>
      <div className="flex-container box-6">
        <img src={linked} />
        <h2> LinkedIn auto reply <br></br>with drip facility</h2>
        <p>Breaking Mars LinkedIn with drip facility offers you to get the fastest replies from your desired prospects.</p>
      </div>
      </div>
    </div>
    </>
  );
}