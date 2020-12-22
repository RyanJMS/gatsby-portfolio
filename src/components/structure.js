import React from "react";
import About from "../pages/about";
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import Education from '../pages/education'
import { Container } from "@material-ui/core";

export default function Structure() {
  return (
    <div>
      <Container maxWidth="lg">
        <br />
        <br />
        <br id="about" />
        <About />
        <br />
        <br id="projects" />
        <Projects />
        <br />
        <br id="skills" />
        <Skills />
        <br />
        <br id="education" />
        <Education/>
        <br />
        <br id="contact" />
        <Contact />
      </Container>
    </div>
  );
}
