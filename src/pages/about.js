import React from "react";
import {Typography} from '@material-ui/core'
import AboutCard from "../components/about-card";

export default function About() {
  return (
    <div id="about">
      <Typography variant="h1" align="center">Welcome!</Typography>
      <AboutCard />
    </div>
  );
}
