import "./Header.scss";
import Navbar from "../Navbar";
import React from "react";
import HeroImage from "../../assets/images/illustration-working.svg";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className="hero-container">
        <div className="hero-image-top">
          <img src={HeroImage} alt="hero-image" />
        </div>
        <div className="hero-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="hero-image" />
        </div>
      </div>
    </div>
  );
}
