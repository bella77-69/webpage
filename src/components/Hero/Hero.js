import React from "react";
import "./hero.scss";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa"

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
          <div className="hero-container--wrapper">
        <figcaption className="hero-text">Hello, I am Chantelle,</figcaption>
        <figcaption className="hero-text--small">a Full-Stack Web Developer</figcaption>
        <figcaption className="hero-text--smaller">Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine</figcaption>
        {/* <button className="hero-btn">About Me</button> */}
        <figcaption className="hero-social">
          <a href="https://www.linkedin.com/in/chantellepasceri/" className="hero-icon">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/bella77-69" className="hero-icon">
            <FaGithub/>
          </a>
          <a href="https://twitter.com/home" className="hero-icon">
            <FaTwitter />
          </a>
        </figcaption>
        </div>
      </div>
    </div>
  );
}

export default Hero;
