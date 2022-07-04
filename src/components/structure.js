import React from "react"
import Skills from "../pages/skills"
import Projects from "../pages/projects"
import Contact from "../pages/contact"
import Education from "../pages/education"
import { Container } from "@material-ui/core"

export default function Structure() {
  return (
    <div>
      <Container maxWidth="lg">
        <br id="projects" />
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
