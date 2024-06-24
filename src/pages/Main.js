import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = ({ project, skills, about, contact }) => {
  return (
    <>
      <Home />
      <About about={about} />
      <Skills skills={skills} />
      <Projects project={project} />
      <Contact contact={contact} />
    </>
  );
};

export default Main;
