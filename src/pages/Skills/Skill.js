import React from "react";
import "./skill.scss";
// import './main.scss';
import Title from "../../components/Title/Title";
import html from "../../assets/badge/html.png";
import css from "../../assets/badge/css.png";
import sass from "../../assets/badge/sass.png";
import javascript from "../../assets/badge/javascript.png";
import sql from "../../assets/badge/database.png";
import react from "../../assets/badge/react.png";
import node from "../../assets/badge/node.png";
import express from "../../assets/badge/express.svg";
import mongodb from "../../assets/badge/mongodb.png";
import firebase from "../../assets/badge/firebase.png";
import jwt from "../../assets/badge/jwt.png";
import rest from "../../assets/badge/rest.png"
function Main(props) {
  return (
    <div className="main">
      <div className="main-title">
        <Title title="Skills" />
      </div>
      <div className="main-wrapper">
        {/* <img className="main-image" src={html} alt="html-icon" />
        <img className="main-image" src={css} alt="css-icon" />
        <img className="main-image main-sass" src={sass} alt="scss-icon" />
        <img className="main-image" src={react} alt="react-icon" />
        <img className="main-image main-js" src={javascript} alt="javascript-icon" />
        <img className="main-image" src={sql} alt="sql-icon" />
        <img className="main-image" src={node} alt="node-icon" />
        <img
          className="main-image main-express"
          src={express}
          alt="express-icon"
        />
        <img className="main-image" src={mongodb} alt="mongodb-icon" />
        <img className="main-image" src={firebase} alt="firebase-icon" />
        <img className="main-image main-jwt" src={jwt} alt="jwt-icon" />
        <img className="main-image main-jwt" src={rest} alt="rest-icon" />
      </div>  */}

      <div class="grid-container">
        <div className="grid">
            <div class="grid-element"><img class="lni lni-atlassian" src={html} alt=""/>HTML</div>
            <div class="grid-element"><img class="lni lni-atlassian" src={css} alt=""/>CSS</div>
            <div class="grid-element"><img class="lni lni-atlassian"src={sass} alt=""/>Sass</div>
            <div class="grid-element"><img class="lni lni-atlassian"src={react} alt=""/>React</div>
            <div class="grid-element"><img class="lni lni-atlassian" src={javascript} alt=""/>JavaScript</div>
            <div class="grid-element"><img class="lni lni-atlassian" src={sql} alt=""/>MySQL</div>
            <div class="grid-element"><img class="lni lni-atlassian" src={node} alt=""/>Node</div>
            <div class="grid-element"><img class="lni lni-atlassian" src={mongodb} alt=""/>Mongodb</div>
            <div class="grid-element"><img class="lni lni-atlassian" src={firebase} alt=""/>Firebase</div>
            <div class="grid-element"><img class="lni lni-atlassian" src={jwt} alt=""/>JWT</div>
            {/* <div class="grid-element"><img class="lni lni-atlassian" src={rest} alt=""/>Rest</div>
            <div class="grid-element"><img class="lni lni-atlassian" src={express} alt=""/>Express</div> */}
            </div>
            </div>
          </div>
    </div>
  );
}

export default Main;
