import React from "react";
import "./index.scss";
import {iconLookup} from "../../../Lookup";

function Projects() {
    return (
        <div className={"projects"}>
            <h1>Featured</h1>

            <div className={"content"}>

                <div className={"project"}>
                    <p className={"title"}>Competitive Programming</p>
                    <div>
                        <img src={iconLookup("github")} alt={"github logo"}/>
                        <p className={"link"}>bradendubois / competitive-programming</p>
                    </div>
                    <p className={"desc"}>A collection of solutions to competitive programming problems, submitted to online judges, such as Kattis.</p>
                    <ul>
                        <li>C++</li>
                        <li>Python 3</li>
                    </ul>
                </div>

                <div className={"project"}>
                    <p className={"title"}>Arch Setup</p>
                    <div>
                        <img src={iconLookup("github")} alt={"github logo"}/>
                        <p className={"link"}>bradendubois / arch-setup</p>
                    </div>
                    <p className={"desc"}>Installer scripts to quickly set up an Arch-based distro with my custom terminal/shell scripts and install software from the AUR. Sets up any machine to be suitable for my daily workflow. Predecessor to another project that backs up my workspace, <i>arch-backup</i>.</p>
                    <ul>
                        <li>Bash</li>
                    </ul>
                </div>

                <div className={"project"}>
                    <p className={"title"}>Personal Website</p>
                    <div>
                        <img src={iconLookup("github")} alt={"github logo"}/>
                        <p className={"link"}>bradendubois / personal-website-v2</p>
                    </div>
                    <p className={"desc"}>An overhaul of my personal website/portfolio built in React, used to showcase projects and personal information. Replaces a version built with HTML/CSS/JavaScript without using any libraries or frameworks.</p>
                    <ul>
                        <li>HTML 5</li>
                        <li>CSS / SCSS</li>
                        <li>TypeScript</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects;