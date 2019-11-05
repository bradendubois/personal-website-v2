import React from 'react';

// Page section imports
import PageHeader from "./mainComponents/PageHeader";
import IntroSection from "./mainComponents/IntroSection";
import ProjectSection from "./mainComponents/ProjectSection";

import "./Homepage.scss";

function Homepage() {

    let navOptions = [
        {
            id: "intro",
            display: "About"
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
            <ProjectSection id={navOptions[1].id}/>
        </div>
    )
}

export default Homepage;