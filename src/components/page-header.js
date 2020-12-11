import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Typography,
    Box,
    Divider
  } from "@material-ui/core/";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));

export default function PageHeader(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid justify="center" item xs={12}>
          <Box pb={4} pt={6} justify="center">
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              {props.title}
            </Typography>
          </Box>
        </Grid>
        <Divider />
        {props.children}
        </Grid>
        </div>
    )
}
