import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Page section imports
import NavBar from "./components/Sections/NavBar";
import IntroSection from "./components/Sections/IntroSection";
import EducationSection from "./components/Sections/EducationSection";
import ProjectSection from "./components/Sections/ProjectSection";
import Footer from "./components/Sections/Footer";

// Style
import "./index.scss";

function Homepage() {

    // TODO - find some better way to connect this list with the actual sections; having to specify \\
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


ReactDOM.render(
    <Homepage />,
    document.getElementById('root')
);

serviceWorker.unregister();
