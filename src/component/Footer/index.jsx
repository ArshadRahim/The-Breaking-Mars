/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import icon1 from "../../assets/Group 1859.png";
import logo from "../../assets/Breaking Mars.png";
import face from "../../assets/Social Icons.png";
import linked from "../../assets/Social Icons (1).png";
import twitt from "../../assets/Social Icons (2).png";
import you from "../../assets/Social Icons (3).png";

import email from "../../assets/email-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import './styles.css'

export default function Footer() {
  return (
    <>
        {/* Footer Component */}
        
    <div className="footer">
      <div className="flez">
        <div className="container">
        <div className="logos">
        <img src={icon1} />
        <img src={logo} />
        </div>
        <p>Breaking Mars| #1 Leading & Effortless <br/> Prospect Perceiving Platform.</p>
        <div className="icons-container">
        <img src={face} />
        <img src={linked} />
        <img src={twitt} />
        <img src={you} />
        </div>
        </div>
        <div className="container">
          <h4>Quick Links</h4>
          <ul>
            <li>Features</li>
            <li>$40K+ Rewards</li>
            <li>Pricing</li>
            <li>Affiliate</li>
            <li>How it works</li>
          </ul>
        </div>
        <div className="container">
        <h4>Services</h4>
          <ul>
            <li>Help</li>
            <li>Blog</li>
            <li>Getting Started Demo</li>
            <li>FAQ</li>
            <li>Breaking Mars Vs Alfread</li>
            <li>Breaking Mars Vs Dux-soup</li>
          </ul>
        </div>
        <div className="container">
        <h4>Reach us</h4>
          <div className="reachus-flex">
          <img src={email} />
          <p>hello@breakingmars.com </p>
          </div>
          <div className="reachus-flex">
          <img src={phone} />
          <p>‪(507) 200-0204 </p>
          </div>
          <div className="reachus-flex">
          <img src={location} />
          <p>New Castle, Newark, Delaware, USA </p>
          </div>
        </div>
      </div>
    <div className="foot-copyright">
      <p>© 2021 Breaking Mars.Inc. All rights reserved</p>
      <p>Terms & Conditions | Privacy Policy</p>
    </div>
    </div>
      


    </>
  );
}
