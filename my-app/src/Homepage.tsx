import React from 'react';

// import githubLogo from "../public/Github-Mark-Light-64px.jpg"
import Project from "./projects/Project";

let githubLogo = "/GitHub-Mark-Light-64px.png";
let externalLinkIcon = "/external_link_light.png";

function Homepage() {
    return (
        <div>
            <Project
                title={"My Project"}
                description={"This is a test project; this is some test text to show the flow of a description of a project if the description were relatively long."}
                links={[
                    {url: "https://www.github.com/bradendubois", image: {path: githubLogo, alt: "Github Logo"}},
                    {url: "https://www.bradendubois.dev", image: {path: externalLinkIcon, alt: "External Link Icon"}}
                    ]}
                tags={[{type: "html", display: "HTML 5"}, {type: "css", display: "CSS 3"}]}
            />
        </div>
    )
}

export default Homepage;