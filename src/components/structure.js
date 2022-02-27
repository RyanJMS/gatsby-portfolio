import React from "react"
import About from "../pages/about"
import Skills from "../pages/skills"
import Projects from "../pages/projects"
import Contact from "../pages/contact"
import Education from "../pages/education"
import { Container } from "@material-ui/core"

export default function Structure() {
  return (
    <div>
      <Container maxWidth="lg">
        <br id="about" />
        <br />
        <br />
        <About />
        <br id="projects" />
        <br />
        <Projects />
        <br id="skills" />
        <br />
        <Skills />
        <br id="education" />
        <br />
        <Education />
        <br id="contact" />
        <br />
        <Contact />
      </Container>
    </div>
  )
}
