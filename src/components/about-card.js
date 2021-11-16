import React from "react";
import { Typography, Grid  } from "@material-ui/core";
import CardStyle from './card-style'
import AboutImage from '../../static/images/aboutcard.jpg'

export default function AboutCard() {

  return (
    <CardStyle>
      <Grid container alignItems={'center'}>
      <Grid item xs={12} sm={12} m={6}>
      <img style={{ height: '80%', width: '75%', borderRadius: '50%'}} alt="Ryan Schock" src={AboutImage}/>
      </Grid>
      <Grid item xs={12} sm={12} m={6}>
      <Typography variant="body1" color="textPrimary" component="p" align="left" fontSize="6em">
          Welcome! I'm Ryan Schock, a web developer based out of Ottawa,
          Ontario, Canada. I have completed a coding bootcamp through Carleton
          University, in Full Stack. 
          <br />
          I am very comfortable with the MERN stack,
          but as it goes -- continue to learn and develop my skills everyday. I
          have a keen interest in developing useful applications, that are
          accessible, and user friendly. 
          <br />
           Thank you for stopping by, I encourage you to check out my
          portfolio, and projects down below!
        </Typography>
      </Grid>
      </Grid>
    </CardStyle>
  );
}
