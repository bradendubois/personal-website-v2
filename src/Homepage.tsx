import React from 'react';

// Page section imports
import NavBar from "./components/main/NavBar";
import IntroSection from "./components/main/IntroSection";
import EducationSection from "./components/main/EducationSection";
import ProjectSection from "./components/main/ProjectSection";

import Footer from "./components/main/Footer";
import "./Homepage.scss";

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