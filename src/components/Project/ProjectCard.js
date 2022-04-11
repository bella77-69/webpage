import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import './projectcard.scss'
function ProjectCard(props) {
    console.log(props)
  return (
    <div className="project-card-view">
      <img src={props.imgPath} alt="div-img" className="project-img"/>
      <div>
        <h1>{props.title}</h1>
        <div className="repo-description">
          {props.description}
        </div>
        <button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </button>
      </div>
    </div>
  );
}
export default ProjectCard;