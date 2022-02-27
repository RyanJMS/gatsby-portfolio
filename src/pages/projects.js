import React, { useState, useEffect } from "react"
import projects from "../../static/data/projects.json"
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
} from "@material-ui/core/"
import PageHeader from "../components/page-header"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..

export default function Project() {
  const [projectData, setProjects] = useState([])
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    })
  }, [])

  useEffect(() => {
    setProjects(projects)
  }, [])

  return (
    <div id="projects">
      <PageHeader title={"Projects"}>
        {projectData.map(project => (
          <Grid item xs={12} sm={6}>
            <Card data-aos="fade-in">
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
                <Typography
                  align="center"
                  variant="body2"
                  color="textPrimary"
                  component="p"
                >
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
  )
}
