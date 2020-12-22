import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
} from "@material-ui/core/";
import CardStyle from './card-style'

export default function SkillsCard({ title, image }) {
  return (
    <div>
      <CardStyle>
      <Card height="30%" width="30%">
        <CardHeader align="center">{title}</CardHeader>
        <CardContent>
          <CardMedia align="center">
            <img src={image} alt={title} height="75%" width="75%" />
          </CardMedia>
          <Typography  align="center" height="25%" width="15%" variant="h6">
            {title}
          </Typography>
        </CardContent>
      </Card>
      </CardStyle>
    </div>
  );
}