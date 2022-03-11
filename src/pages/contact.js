import React from "react"
import PageHeader from "../components/page-header"

import { Grid, Paper, Typography, Button, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Linkedin from "../../static/images/in.png"
import Github from "../../static/images/github.png"
import Resume from "../../static/Resume.pdf"
import ProfilePic from "../../static/images/git.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function Contact() {
  const classes = useStyles()

  return (
    <div>
      <Typography
        variant="h2"
        align="center"
        fontSize="1.5rem"
        className="title"
      >
        Contact
      </Typography>

      <Grid container alignItems="center" direction="row">
        <Grid item xs={12} sm={6} style={{ justify: "center", width: "100%" }}>
          <img
            style={{
              height: "25%",
              width: "60%",
              borderRadius: "25%",
            }}
            alt="Ryan Schock"
            src={ProfilePic}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1" color="textPrimary" align="left">
              Email:{" "}
              <a href="mailto:ryanjms613@gmail.com">ryanjms613@gmaill.com</a>
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" align="left">
              Mobile: <a href="tel:6138660322">613-866-0322</a>
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" align="left">
              Resume:{" "}
              <a href={Resume} target="_blank" rel="noreferrer">
                Ryan Schock Resume
              </a>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
