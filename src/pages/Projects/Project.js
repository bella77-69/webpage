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
      <div className="project-container--bottom">
        <div className="colDivider" id="webprj">
          <div className="subNav">Web Development Projects</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {wbprjData.map((website) => (
              <div className="prjContent">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div className="prjName">{website.name}</div>
                  {/* <a href={website.github} ></a> */}
                </div>
                {/* { !website.desktopGif && <div style={{textAlign: "left", backgroundColor: "lightgray", borderRadius: "10px", width: "fit-content", height: "fit-content", marginTop: "-12px", marginBottom: "12px"}}>#Hackathon</div> } */}
                <div className="prjDesc">{website.desc}</div>
                {website.desktopGif && (
                  <div className="subtitle">WEBSITE PREVIEW</div>
                )}
                <div className="prjDemo">
                  {website.desktopGif && (
                    <img
                      className="prjDemo desktopDemo movie-demo"
                      src={website.desktopGif}
                      alt=""
                    />
                  )}
                  {website.mobileGif && (
                    <img
                      className="prjDemo mobileDemo movie-demo"
                      src={website.mobileGif}
                      alt=""
                    />
                  )}
                </div>
                <div className="subpoints">
                  <div className="column">
                    <div className="subtitle">FEATURES</div>
                    <ul className="notes">
                      {website.features.map((feature) => (
                        <li>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="column">
                    <div className="subtitle">TECHNOLOGIES</div>
                    <ul className="notes">
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
        <div className="colDivider">
          <div className="subNav"> Brainstation Projects</div>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            id="mobileprj"
          >
            {mbprjData.map((app) => (
              <div className="prjContent">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div className="prjName">{app.name}</div>
                  {/* <a href={app.github} style={{textDecoration: "none"}}></a> */}
                </div>
                <div className="prjDesc">{app.desc}</div>
                <div className="subpoints">
                  <div className="column">
                    <div className="subtitle">PREVIEW</div>
                    <div className="prjDemo">
                      {app.mobileGif && (
                        <img
                          className="prjDemo mobileDemo"
                          src={app.mobileGif}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  <div className="column">
                    <div className="subtitle">FEATURES</div>
                    <ul className="notes">
                      {app.features.map((feature) => (
                        <li>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="column">
                    <div className="subtitle">TECHNOLOGIES</div>
                    <ul className="notes">
                      {app.techs.map((module) => (
                        <li>{module}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="colDivider">
          <div className="subNav" id="otherprj">
            Other Projects
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {othprjData.map((prj) => (
              <div className="prjContent">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div className="prjName">{prj.name}</div>
                  <a href={prj.github} style={{ textDecoration: "none" }}></a>
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
                <div className="prjDesc">{prj.desc}</div>
                {prj.demo.half ? (
                  <div className="subpoints">
                    <div className="column">
                      {prj.demo.image && (
                        <div className="subtitle">{prj.demo.name}</div>
                      )}
                      <div className="prjDemo">
                        {prj.demo.image && (
                          <img
                            className="prjDemo mobileDemo"
                            src={prj.demo.image}
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                    <div className="subpoints">
                      <div className="column">
                        <div className="subtitle">FEATURES</div>
                        <ul className="notes">
                          {prj.features.map((feature) => (
                            <li>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="column">
                        <div className="subtitle">TECHNOLOGIES</div>
                        <ul className="notes">
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
                      <div className="subtitle">{prj.demo.name}</div>
                    )}
                    <div className="prjDemo">
                      {prj.demo.image && (
                        <img
                          className="demofullimg"
                          src={prj.demo.image}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="subpoints">
                      <div className="column">
                        <div className="subtitle">FEATURES</div>
                        <ul className="notes">
                          {prj.features.map((feature) => (
                            <li>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="column">
                        <div className="subtitle">TECHNOLOGIES</div>
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
  );
};

export default Project;
