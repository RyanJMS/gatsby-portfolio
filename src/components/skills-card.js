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
        <CardHeader>{title}</CardHeader>
        <CardContent>
          <CardMedia>
            <img src={image} alt={title} height="75%" width="75%" />
          </CardMedia>
          <Typography height="25%" width="15%" variant="h6">
            {title}
          </Typography>
        </CardContent>
      </Card>
      </CardStyle>
    </div>
  );
}