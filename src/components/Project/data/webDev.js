import lash from "../../../assets/projects/lash.jpg";
import lash2 from "../../../assets/projects/lash2.jpg";
import movie from "../../../assets/projects/movie2.jpg";
import movie2 from "../../../assets/projects/movie.jpg";

export const wbprjData = [
  {
    id: 1,
    name: "Bella Lashes Inc",
    github: "https://github.com/Bella77-69/lash-app",
    website: "",
    desc: "Full Stack MERN CRUD Website for a business. Users can book appointments for lash services, checkout pricing and get full informaion of the different services provided.",
    desktopGif: lash,
    mobileGif: lash2,
    features: [
      "Appointment Scheduling",
      "Customer base management",
      "Saving user's contact form",
      "Give feedback of services",
      "Price Grid",
    ],
    techs: [
      "React",
      "Mongo",
      "Express",
      "Node",
      "material-ui",
      "react-router",
      "react-redux",
      "axios",
      "bootstrap",
      "styled-components",
      "jsonwebtoken",
      "bcryptjs",
      "mongoose",
    ],
  },
  {
    id: 2,
    name: "Movie App",
    github: "https://github.com/bella77-69/movie-app2",
    website: "",
    desc: "A Netflix Clone App with TMDB movies and series. User can view the Trailer of movie by clicking on the image.",
    desktopGif: movie,
    mobileGif: movie2,
    features: ["NetFlix Clone", "View Trailers"],
    techs: ["React", "React-YouTube", "React-Router", "Sass", "Axios"],
  },
];
