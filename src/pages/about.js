import React from "react"
import { Typography } from "@material-ui/core"
import AboutCard from "../components/about-card"
import "../styles/style.css"

export default function About() {
  return (
    <div>
      <Typography
        variant="h2"
        align="center"
        fontSize="1.5rem"
        className="title"
      >
        Welcome!
      </Typography>
      <AboutCard />
    </div>
  )
}
