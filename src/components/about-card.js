import React from "react";
import { Typography, Grid  } from "@material-ui/core";
import CardStyle from './card-style'
import AboutImage from '../../static/images/aboutcard.jpg'

export default function AboutCard() {

  return (
    <CardStyle>
      <Grid container alignItems={'center'}>
      <Grid item xs={6} sm={6} m={6}>
      <img style={{ height: '80%', width: '75%', borderRadius: '50%'}} alt="Ryan Schock" src={AboutImage}/>
      </Grid>
      <Grid item xs={6} sm={6} m={6}>
      <Typography variant="body1" color="textPrimary" component="p" align="center">
          Welcome! I'm Ryan Schock, a web developer based out of Ottawa,
          Ontario, Canada. I have completed a coding bootcamp through Carleton
          University, in Full Stack. I am very comfortable with the MERN stack,
          but as it goes -- continue to learn and develop my skills everyday. I
          have a keen interest in developing useful applications, that are
          accessible, and user friendly. What I love about coding is the amount
          of control the programmer has in inspiring change in the world. There
          are always variables we can't control in the real world, however using
          coding I aim to inspire positive change in my community, and soon ...
          the world! Thank you for stopping by, I encourage you to check out my
          portfolio, and projects down below!
        </Typography>
      </Grid>
      </Grid>
    </CardStyle>
  );
}
