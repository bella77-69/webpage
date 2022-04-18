import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../pages/Projects/Project";
import Skills from "../../pages/Skills/Skill";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home;
