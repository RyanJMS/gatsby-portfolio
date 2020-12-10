import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardHeader } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
  }));

  
export default function CardStyle(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card height={props.height} width={props.width}>
            <CardHeader title={props.title} />
            <CardContent>
            {props.children}
            </CardContent>
            </Card>
        </div>
    )
}
