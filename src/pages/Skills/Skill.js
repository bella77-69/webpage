import React from "react";
import "./skill.scss";

import Title from "../../components/Title/Title";

function Main() {
  return (
    <div className="main">
      <div className="main-title">
        <Title title="Skills" />
      </div>
      <div className="main-wrapper">
        <div className="box1 box"></div>
        <div className="box2 box"></div>
        <div className="box3 box"></div>
        <div className="box4 box"></div>
      </div>
      <div className="main-wrapper">
        <div className="box5 box"></div>
        <div className="box6 box"></div>
        <div className="box7 box"></div>
        <div className="box8 box"></div>
      </div>
      <div className="main-wrapper">
        <div className="box9 box"></div>
        <div className="box10 box"></div>
        <div className="box11 box"></div>
        <div className="box12 box"></div>
      </div>
    </div>
  );
}

export default Main;
