import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
          <div className="hero-container--wrapper">
        <figcaption className="hero-text">Hello, I am Chantelle,</figcaption>
        <figcaption className="hero-text--small">a Full-Stack Web Developer</figcaption>
        <figcaption className="hero-text--smaller">Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine</figcaption>
        {/* <button className="hero-btn">About Me</button> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
