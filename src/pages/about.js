import React from "react";
import PageHeader from '../components/page-header'
import AboutCard from "../components/about-card";

export default function About() {
  return (
    <div id="about">
      <PageHeader title={"Welcome!"}>
      <AboutCard />
      </PageHeader>
    </div>
  );
}
