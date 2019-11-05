import React from 'react';
import Project from "../projects/Project";

import "./styles/ProjectSection.scss";

import projectData from "../project_test.json";

let projects = projectData.map((item) =>
    <Project
        title={item.title}
        description={item.description}
        links={item.links}
        tags={item.tags}
    />
);

function ProjectSection(props: {id: string}) {
    return (
        <div className={"sectionContainer"} id={props.id}>
            <div className={"projectContainer"}>
                {projects}
            </div>
        </div>
    )
}

export default ProjectSection;