import React from 'react';

// import githubLogo from "../public/Github-Mark-Light-64px.jpg"
import Project from "./projects/Project";

function Homepage() {
    return (
        <div>
            <Project
                title={"My Project"}
                description={"This is a test project; this is some test text to show the flow of a description of a project if the description were relatively long."}
                links={[{url: "https://www.github.com/bradendubois", image: {path: "/GitHub-Mark-Light-64px.png", alt: "Github Logo"}} ]}
                tags={["this", "that"]}
            />
        </div>
    )
}

export default Homepage;