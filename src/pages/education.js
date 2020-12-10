import React from 'react'
import PageHeader from '../components/page-header'
import EducationCard from '../components/education-card'



export default function Education() {
    return (
        <div id="education">
            <PageHeader title={"Education"} >
                <EducationCard />
            </PageHeader>
        </div>
    )
}
