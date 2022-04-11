import React from "react";
import Title from "../Title/Title";
import aboutImg from "../../assets/images/me2.jpg";
import "./about.scss";

const About = () => {
  return (
    <main className="about">
      <div className="about-title">
        <Title title="My Story" />
      </div>
      <div className="about-wrapper">
        <img className="about-img" src={aboutImg} alt="avatar" />

        <article className="about-container">
          <p className="about-details">Hello, and Welcome</p>
          <p className="about-details">
            I am a graduate of BrainStation's Full Stack Web Developer Program.
            I became a Web Developer because this practice allows me to inhabit
            the space where art and science collide. To me coding is like
            overhearing a conversation in a foreign language, or like catching
            music drifiting through fog. It's also the beauty and wonder of an
            industrial site - where scaffolding and a thousand tiny pieces come
            together to build something incredible.

          </p>
          <p className="about-details">
            {" "}
            I am seeking projects to
            maximize the value I can bring to end-users in today’s digital
            world. I look forward to being continuously challenged and learning
            new things every day.
          </p>
          <p className="about-details">
            Building state-of-the-art, easy to use, user-friendly websites and
            applications is truly a passion of mine. This industry appeals to me
            because it's beautiful and breathtaking and messy, yet also demands
            razor's-edge precision. It's some of the most rewarding and
            challenging work I've ever done, and I strive to showcase the best
            parts of myself in the work that I do.
          </p>
        </article>
      </div>
    </main>
  );
};

export default About;
