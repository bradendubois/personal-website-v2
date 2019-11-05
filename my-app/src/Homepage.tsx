import React from 'react';

// Page section imports
import PageHeader from "./mainComponents/PageHeader";
import IntroSection from "./mainComponents/IntroSection";
import ProjectSection from "./mainComponents/ProjectSection";

import "./Homepage.scss";
import EducationSection from "./mainComponents/EducationSection";

function Homepage() {

    // TODO - find some better way to connect this list with the actual sections; having to specify \
    // the actual index feels like poor practice.

    let navOptions = [
        {
            id: "intro",
            display: "About"
        },
        {
            id: "education",
            display: "Education"
        },
        {
            id: "projects",
            display: "Projects"
        }
    ];

    return (
        <div className={"homepageContainer"}>
            <PageHeader page={navOptions}/>
            <IntroSection id={navOptions[0].id}/>
            <EducationSection id={navOptions[1].id}/>
            <ProjectSection id={navOptions[2].id}/>
        </div>
    )
}

export default Homepage;