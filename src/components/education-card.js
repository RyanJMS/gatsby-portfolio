import React from "react";
import {  Typography, Divider} from "@material-ui/core";
import CardStyle from './card-style'

export default function EducationCard() {

  return (
    <CardStyle>
        <Typography variant="h4" color="textPrimary" align="center">Carleton University</Typography>
        <Typography variant="subtitle1" color="textPrimary" align="center">Full Stack Certification - A+ Average</Typography>
        <Divider />
        <Typography variant="body1" color="textPrimary" component="p">
        A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.
        </Typography>
    </CardStyle>
  );
}
