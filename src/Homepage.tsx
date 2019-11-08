import React from 'react';

// Page section imports
import NavBar from "./mainComponents/NavBar";
import IntroSection from "./mainComponents/IntroSection";
import ProjectSection from "./mainComponents/ProjectSection";
import Footer from "./mainComponents/Footer";

import "./Homepage.scss";
import EducationSection from "./mainComponents/EducationSection";

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
            <IntroSection id={navOptions[0].id}/>
            <EducationSection id={navOptions[1].id}/>
            <ProjectSection id={navOptions[2].id}/>
            <Footer />
        </div>
    )
}

export default Homepage;