import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div id="home" className="hero hero-image">
    <div className="hero-overlay"></div>
    <div className="hero-content hero-table">
      <div className="hero-cell">
        <div className="hero-container">
         {/* <p class="hero-intro">Hello, </p> */}
          <h1 className="hero-intro-title mb-4">I am Chantelle</h1>
          <p className="hero-subtitle"><span className="text-slider-items">Full-Stack Web Developer</span><strong class="text-slider"></strong></p>
          <p className="hero-text--smaller">Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine</p>
      {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
        </div>
      </div>
    </div>
  </div>
    // <div className="hero">
    //   <div className="hero-container">
    //       <div className="hero-container--wrapper">
    //     <figcaption className="hero-text">Hello, I am Chantelle,</figcaption>
    //     <figcaption className="hero-text--small">a Full-Stack Web Developer</figcaption>
    //     <figcaption className="hero-text--smaller">Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine</figcaption>
    //     {/* <button className="hero-btn">About Me</button> */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero;
