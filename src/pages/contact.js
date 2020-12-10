import React from "react";
import PageHeader from '../components/page-header'

import {Grid, Paper, Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CodeWars from '../../static/images/codewars.png'
import Linkedin from '../../static/images/in.png'
import Github from '../../static/images/github.png'
import Resume from '../../static/Resume.pdf'
import ProfilePic from '../../static/images/git.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function Contact() {
  
  const classes = useStyles();
  
  return (
    <div id="contact"> 
      <PageHeader title={"Contact"}>
      <Grid container spacing={3} alignItems="center" direction="row"
  justify="center">
        <Grid item xs={12} sm={6}>
           <img style={{ height: '50%', width: '50%', borderRadius: '50%' }} alt="Ryan Schock" src={ProfilePic}/>
        </Grid>
        <Grid item xs={12} sm={6}>
  <Paper className={classes.paper}>
      <Typography variant="subtitle1" color="textPrimary" align="left">
        Email: <a href='mailto:jukkasc2@gmail.com'>jukkasc2@gmail.com</a>
      </Typography>
      <Typography variant="subtitle1" color="textPrimary" align="left">
        Mobile: <a href='tel:6138660322'>613-866-0322</a>
      </Typography>
      <Typography variant="subtitle1" color="textPrimary" align="left">
      Resume: <a href={Resume} target='_blank'>Resume2020</a>
      </Typography>
    </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
          <Button href="https://www.codewars.com/users/RyanJMS"
            target="_blank"  item xs={4} sm={4}>
            <img  alt='codewars' src={CodeWars} />
            </Button>
            <Button target='_blank' href="https://www.linkedin.com/in/ryanjmschock/" item xs={4} sm={4}>
            <img alt='linkedin' src={Linkedin}  />
            </Button>
            <Button item xs={4} sm={4} target='_blank' href="https://github.com/ryanjms">
            <img alt='github' src={Github} />
            </Button>
          </Paper>
        </Grid>
        </Grid>
      </PageHeader>
    </div>
  );
}