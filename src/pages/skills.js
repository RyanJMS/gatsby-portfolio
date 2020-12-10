import React, { useEffect, useState } from "react";
import SkillsCard from "../components/skills-card";
import FrontEndSkills from "../../static/data/FESkills.json";
import BackEndSkills from "../../static/data/BESkills.json";
import { Grid, Divider } from "@material-ui/core";
import PageHeader from '../components/page-header'
export default function Skills() {
  const [frontEndSkills, setFrontEndSkills] = useState([]);
  const [backEndSkills, setBackEndSkills] = useState([]);

  useEffect(() => {
    setFrontEndSkills(FrontEndSkills);
  }, []);

  useEffect(() => {
    setBackEndSkills(BackEndSkills);
  }, []);

  return (
    <div id="skills">
      <PageHeader title={"Skills"}>
        {frontEndSkills.map((FrontEndSkills) => (
          <Grid
            height="10%"
            width="10%"
            item
            xs={6}
            sm={6}
            md={4}
            lg={4}
            xl={3}
          >
            <SkillsCard
              title={FrontEndSkills.title}
              image={FrontEndSkills.image}
            />
          </Grid>
        ))}
        <Divider />
        {backEndSkills.map((BackEndSkills) => (
          <Grid
            height="10%"
            width="10%"
            item
            xs={6}
            sm={6}
            md={4}
            lg={4}
            xl={3}
          >
            <SkillsCard
              title={BackEndSkills.title}
              image={BackEndSkills.image}
            />
          </Grid>
        ))}
      </PageHeader>
    </div>
  );
}
