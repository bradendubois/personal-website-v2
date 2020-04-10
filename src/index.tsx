// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Page section imports
import NavBar from "./components/NavBar";
import IntroSection from "./components/Intro";
import EducationSection from "./components/Education";
import ProjectSection from "./components/Projects";
import Footer from "./components/Footer";

// Style
import "./index.scss";

const navOptions = [
    {
        id: "intro",
        nav: "about",
        display: "braden dubois"
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

const Homepage = () =>

    // TODO - find some better way to connect this list with the actual sections; having to specify
    //  the actual index feels like poor practice.


    <div className={"homepageContainer"}>
        <NavBar tabs={navOptions}/>

        {IntroSection(navOptions[0].id, navOptions[0].display)}

        <EducationSection section={navOptions[1]}/>
        <ProjectSection
            id={navOptions[2].id}
            display={navOptions[2].display}
        />
        <Footer/>
    </div>;





ReactDOM.render(Homepage(), document.getElementById('root'));
serviceWorker.unregister();
