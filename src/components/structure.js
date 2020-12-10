import React from "react";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Education from '../pages/Education'
import { Container } from "@material-ui/core";

export default function Structure() {
  return (
    <div>
      <Container maxWidth="lg">
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
