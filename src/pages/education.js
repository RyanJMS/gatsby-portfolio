import React, { useEffect } from "react"
import PageHeader from "../components/page-header"
import EducationCard from "../components/education-card"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..

export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    })
  }, [])
  return (
    <div>
      <PageHeader title={"Education"}>
        <EducationCard data-aos="fade-left" />
      </PageHeader>
    </div>
  )
}
