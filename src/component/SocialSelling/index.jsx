/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import vector1 from "../../assets/Group 2437.png";
import vector2 from "../../assets/Group 2351.png";
import vector3 from "../../assets/Group 2350.png";
import Untitled from "../../assets/Untitled-2 1.png";
import gif from "../../assets/gif-removebg-preview.gif";
import './styles.css'

export default function SocialSelling() {
  return (
    <>
        {/* Social Selling Component */}

    <div className="social-selling">
      <h2>Your First Attempt at Social Selling <br></br>
        with Breaking Mars</h2>
      <p>You can target and create leads from Linkedin's search and then push those leads <br></br> into a social selling sequencewith Us.
🔥        Let's get started! 
      </p>
      <div className="flex-container">
        <div className="inner-flex">
          <div className="img-container">
        <img src={vector1} />
        </div>
        <div className="text-container">
          <h4>Select campaign Strategy </h4>
          <p> Run your linkedin campaign from 8 different strategies.</p>
        </div>
        </div>
        <div className="inner-flex">
          <div className="img-container">
        <img src={vector2} />
        </div>
        <div className="text-container">
          <h4>Select your audience </h4>
          <p> Choose who you want to target by company, country, gender & more or simply import CSV or paste linkedin search link.</p>
        </div>
        </div>
        <div className="inner-flex">
          <div className="img-container">
        <img src={vector3} />
        </div>
        <div className="text-container">
          <h4>Choose campaign objective  </h4>
          <p> Create Brand awareness by viewing profile. Increase engagement by <br/> sending auto invites. Increase conversion by auto follow up messages.
</p>
        </div>
        </div>
        <div className="graph-img">
        <img className="grap" src={Untitled} />
        <img className="grap-gif" src={gif} />
        </div>
      </div>
    </div>
      
    </>
  );
}
