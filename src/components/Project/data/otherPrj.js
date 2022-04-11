import shop from "../../../assets/projects/shop.jpg";
import food from "../../../assets/projects/food.jpg";

export const othprjData = [
  {
    id: 1,
    name: "Movie App",
    github: "https://github.com/bella77-69/movie-app2",
    desc: "A Netflix Clone App with TMDB movies and series. User can view the Trailer of movie by clicking on the image.",
    demo: {
      image: shop,
      half: true,
      name: "PREVIEW",
    },
    half: false,
    features: ["NetFlix Clone", "View Trailers"],
    techs: ["React", "React-YouTube", "React-Router", "Sass", "Axios"],
  },
  {
    id: 2,
    name: "Food-Recipe App",
    github: "https://github.com/bella77-69/food-recipe-app",
    desc: "A Recipe App that users can search by Name, ingredients, category, popular ingredients such as chicken or beef, or get a random recipe. When a recipe is selected the user recives full recipe instructions along with video instructions as well.   ",
    demo: {
      image: food,
      half: true,
      name: "PREVIEW",
    },
    half: false,
    features: [
      "Recipies",
      "Get information",
      "Recipe Videos",
      "Food Information",
    ],
    techs: ["React", "React-Router", "Sass", "API", "Materialize-css"],
  },
];
