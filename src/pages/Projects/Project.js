import React from "react";
import Title from "../../components/Title/Title";
import { wbprjData } from "../../components/Project/data/webDev";
import { mbprjData } from "../../components/Project/data/mobileDev";
import { othprjData } from "../../components/Project/data/otherPrj";
import "./project.scss";

const Project = () => {
  return (
    <div id="projects" className="project">
      <Title title="Projects" />
      <div className="project-shadow">
        <div className="project-container">
          <div className="project-divder" id="webprj">
            <div className="project-subNav">Web Development Projects</div>
            <div className="project-subtitle">
              {wbprjData.map((website) => (
                <div className="project-content">
                  <div className="project-info">
                    <div className="project-name">{website.name}</div>
                    <a className="project-website"href={website.github}></a>
                  </div>
                  <div className="project-desc">{website.desc}</div>
                 
                    <div className="project-option">WEBSITE PREVIEW</div>
                
                  <div className="project-demo">
                    
                      <img
                        className="project-demo project-desktopDemo project-movie-demo"
                        src={website.desktopGif}
                        alt="project-preview"
                      />
                   
                  
                      <img
                        className="project-demo project-mobileDemo project-movie-demo"
                        src={website.mobileGif}
                        alt="project-preview"
                      />
               
                  </div>
                  <div className="project-subpoints">
                    <div className="project-column">
                      <div className="project-subtitle">FEATURES</div>
                      <ul className="project-notes">
                        {website.features.map((feature) => (
                          <li>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-column">
                      <div className="project-subtitle">TECHNOLOGIES</div>
                      <ul className="project-notes">
                        {website.techs.map((tech) => (
                          <li>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="project-divder">
            <div className="project-subNav"> Brainstation Projects</div>
            <div className="project-subtitle" >
              {mbprjData.map((app) => (
                <div className="project-content">
                  <div className="project-info">
                    <div className="project-name">{app.name}</div>
                    <a className="project-website" href={app.github}></a>
                  </div>
                  <div className="project-desc">{app.desc}</div>
                  <div className="project-subpoints">
                    <div className="project-column">
                      <div className="project-subtitle">PREVIEW</div>
                      <div className="project-demo">
                      
                          <img
                            className="project-demo mobileDemo"
                            src={app.mobileGif}
                            alt=""
                          />
                    
                      </div>
                    </div>
                    <div className="project-subpoints">
                    <div className="project-column">
                      <div className="project-subtitle">FEATURES</div>
                      <ul className="project-notes">
                        {app.features.map((feature) => (
                          <li className="project-list">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-column">
                      <div className="project-subtitle">TECHNOLOGIES</div>
                      <ul className="project-notes">
                        {app.techs.map((module) => (
                          <li className="project-list">{module}</li>
                        ))}
                      </ul>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="project-divder">
            <div className="project-subNav" >
              Other Projects
            </div>
            <div  className="project-subtitle" >
              {othprjData.map((prj) => (
                <div className="project-content">
                  <div className="project-info">
                    <div className="project-name">{prj.name}</div>
                    <a className="project-website" href={prj.github}></a>
                  </div>
                  {prj.tags && (
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
                    >
                      {prj.tags.map((tag) => (
                        <div
                          style={{
                            textAlign: "left",
                            backgroundColor: tag.color,
                            borderRadius: "10px",
                            width: "fit-content",
                            height: "fit-content",
                            marginTop: "-12px",
                            marginBottom: "12px",
                          }}
                        >
                          # {tag.name}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="project-desc">{prj.desc}</div>
                  {prj.demo.half ? (
                    <div className="project-subpoints">
                      <div className="project-column">
                        {prj.demo.image && (
                          <div className="project-subtitle">
                            {prj.demo.name}
                          </div>
                        )}
                        <div className="project-demo">
                          {prj.demo.image && (
                            <img
                              className="project-demo mobileDemo"
                              src={prj.demo.image}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="project-subpoints">
                        <div className="project-column">
                          <div className="project-subtitle">FEATURES</div>
                          <ul className="project-notes">
                            {prj.features.map((feature) => (
                              <li>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="project-column">
                          <div className="project-subtitle">TECHNOLOGIES</div>
                          <ul className="project-notes">
                            {prj.techs.map((tech) => (
                              <li>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {prj.demo.image && (
                        <div className="project-subtitle">{prj.demo.name}</div>
                      )}
                      <div className="prjDemo">
                        {prj.demo.image && (
                          <img
                            className="project-demofullimg"
                            src={prj.demo.image}
                            alt="project-preview"
                          />
                        )}
                      </div>
                      <div className="subpoints">
                        <div className="column">
                          <div className="project-subtitle">FEATURES</div>
                          <ul className="notes">
                            {prj.features.map((feature) => (
                              <li>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="column">
                          <div className="project-subtitle">TECHNOLOGIES</div>
                          <ul className="notes">
                            {prj.techs.map((tech) => (
                              <li>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
