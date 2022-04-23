import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero hero-image">
      <div className="hero-overlay"></div>
      <div className="hero-content hero-table">
        <div className="hero-cell">
          <div className="hero-container">
            <h1 className="hero-title">I am Chantelle</h1>
            <p className="hero-subtitle">Full-Stack Web Developer</p>
            <p className="hero-smaller">
              Building state-of-the-art, easy to use, user-friendly websites and
              applications is truly a passion of mine!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
