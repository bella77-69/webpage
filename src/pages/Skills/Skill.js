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
        <div class="box1 box"></div>
        <div class="box2 box"></div>
        <div class="box3 box"></div>
        <div class="box4 box"></div>
      </div>
      <div className="main-wrapper">
        <div class="box5 box"></div>
        <div class="box6 box"></div>
        <div class="box7 box"></div>
        <div class="box8 box"></div>
      </div>
      <div className="main-wrapper">
        <div class="box9 box"></div>
        <div class="box10 box"></div>
        <div class="box11 box"></div>
        <div class="box12 box"></div>
      </div>
    </div>
  );
}

export default Main;
