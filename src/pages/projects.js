import React, { useState, useEffect } from "react";
import projects from "../../static/data/projects.json";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
  CardMedia,
  Button,
  Box,
} from "@material-ui/core/";
import PageHeader from "../components/page-header"

export default function Project() {
  const [projectData, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projects);
  }, []);
  

  return (
    <div id="projects">
      <PageHeader title={"Projects"}>
        {projectData.map((project) => (
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia align="center">
                <Box pt={2}> 
                  <img
                    src={project.image}
                    alt="projectImage"
                    height="50%"
                    width="50%"
                    
                  />
                </Box>
              </CardMedia>
              <CardHeader align="center" title={project.title} />
              <CardContent>
                <Typography align="center" variant="body2" color="textPrimary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  color="primary"
                  rel="noopener"
                  target="_blank"
                  href={project.repoLink}
                >
                  GitHub Repo
                </Button>
                <Button
                  size="medium"
                  color="secondary"
                  rel="noopener"
                  target="_blank"
                  href={project.liveLink}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </PageHeader>
    </div>
  );
}