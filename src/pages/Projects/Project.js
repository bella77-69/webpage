// import React from 'react';
// import "./project.scss"
// import ProjectCard from '../../components/Project/ProjectCard';
// import task from "../../assets/projects/task.jpg"
// import shop from '../../assets/projects/shop.jpg'
// import wine from "../../assets/projects/wine2.jpg"
// import brain from "../../assets/projects/brain.jpg"
// import band from "../../assets/projects/band.jpg"
// function Project(props) {
//     return (
//         <section fluid className="project-section">
//         {/* <Particle /> */}
//         <div className='project-left'>
//           <h1 className="project-heading">
//             My Recent <strong className="purple">Works </strong>
//           </h1>
//           <p >
//             Here are a few projects I've worked on recently.
//           </p>
//           <div>
//             <div className="project-card">
//               <ProjectCard
//                 imgPath={task}
//                 isBlog={false}
//                 title="Task Manager"
//                 description="A CRUD application in React with Firebase Web SDK v9. Focus is on implementing the CRUD functionalities, which are:

//                 -Adding a new task to Firestore
//                 -Getting all tasks from Firestore
//                 -Updating a task -Deleting a task"
//                 link="https://github.com/bella77-69/task-manager"
//               />
//             </div>

//             <div md={4} className="project-card">
//               <ProjectCard
//                 imgPath={shop}
//                 isBlog={false}
//                 title="Shopping Cart"
//                 description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//                 link="https://github.com/soumyajit4419/Bits-0f-C0de"
//               />
//             </div>

//             <div md={4} className="project-card">
//               <ProjectCard
//                 imgPath={wine}
//                 isBlog={false}
//                 title="Che Vino"
//                 description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//                 link="https://github.com/soumyajit4419/Editor.io"
//               />
//             </div>

//             <div md={4} className="project-card">
//               <ProjectCard
//                 imgPath={brain}
//                 isBlog={false}
//                 title="BrainFlix"
//                 description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//                 link="https://github.com/soumyajit4419/Plant_AI"
//               />
//             </div>

//             <div md={4} className="project-card">
//               <ProjectCard
//                 imgPath={band}
//                 isBlog={false}
//                 title="BandSite"
//                 description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//                 link="https://github.com/soumyajit4419/AI_For_Social_Good"
//               />
//             </div>

//             <div md={4} className="project-card">
//               <ProjectCard
//                 // imgPath={emotion}
//                 isBlog={false}
//                 title="Face Recognition and Emotion Detection"
//                 description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//                 Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//                 link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     );
// }

// export default Project;

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
      {/* <div className="project-container">
                <p className="project-container--title" >Projects</p>
                
                <div className="project-divder"></div>
            </div> */}
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
