import React from "react";
import Title from "../Title/Title";
import aboutImg from "../../assets/images/me2.jpg";
import "./about.scss";

const About = () => {
  return (
    <main className="about">
      <div className="about-title">
        <Title title="About Me" />
      </div>

      <div className="about-wrapper">
        <div className="about-shadow">
          <img className="about-img" src={aboutImg} alt="avatar" />

          <article className="about-container">
            <p className="about-details">
              Building state-of-the-art, easy to use, user-friendly websites and
              applications is truly a passion of mine. This industry appeals to
              me because it's some of the most rewarding and challenging work
              I've ever done! I love bringing concepts to life through code. I
              am seeking projects as a web developer to maximize the value I can
              bring to end-users in today’s digital world. I look forward to
              being continuously challenged and learning new things every day.
            </p>

            <p className="about-details">
              Apart from coding all day and night, I enjoy reading, watching
              Hockey, movies, and I also enjoy plants. I am currently running
              out of window ledges!
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default About;
