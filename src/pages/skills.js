import React, { useEffect, useState } from "react"
import SkillsCard from "../components/skills-card"
import FrontEndSkills from "../../static/data/FESkills.json"
import BackEndSkills from "../../static/data/BESkills.json"
import { Grid, Divider } from "@material-ui/core"
import PageHeader from "../components/page-header"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..

export default function Skills() {
  const [frontEndSkills, setFrontEndSkills] = useState([])
  const [backEndSkills, setBackEndSkills] = useState([])

  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    })
  }, [])
  useEffect(() => {
    setFrontEndSkills(FrontEndSkills)
  }, [])

  useEffect(() => {
    setBackEndSkills(BackEndSkills)
  }, [])

  return (
    <div>
      <PageHeader title={"Skills"}>
        {frontEndSkills.map(FrontEndSkills => (
          <Grid
            height="10%"
            width="10%"
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
            data-aos="fade-in"
          >
            <SkillsCard
              title={FrontEndSkills.title}
              image={FrontEndSkills.image}
              data-aos="fade-in"
            />
          </Grid>
        ))}
        <Divider />
        {backEndSkills.map(BackEndSkills => (
          <Grid
            height="10%"
            width="10%"
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
            data-aos="fade-in"
          >
            <SkillsCard
              title={BackEndSkills.title}
              image={BackEndSkills.image}
              data-aos="fade-in"
            />
          </Grid>
        ))}
      </PageHeader>
    </div>
  )
}
