import React from 'react';

// Page section imports
import NavBar from "./main/NavBar";
import IntroSection from "./main/IntroSection";
import ProjectSection from "./main/ProjectSection";
import Footer from "./main/Footer";

import "./Homepage.scss";
import EducationSection from "./main/EducationSection";

function Homepage() {

    // TODO - find some better way to connect this list with the actual sections; having to specify \
    // the actual index feels like poor practice.

    let navOptions = [
        {
            id: "intro",
            display: "about"
        },
        {
            id: "education",
            display: "education"
        },
        {
            id: "projects",
            display: "projects"
        }
    ];

    return (
        <div className={"homepageContainer"}>
            <NavBar page={navOptions}/>
            <IntroSection section={navOptions[0]}/>
            <EducationSection section={navOptions[1]}/>
            <ProjectSection section={navOptions[2]}/>
            <Footer />
        </div>
    )
}

export default Homepage;