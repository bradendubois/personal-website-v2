import React from 'react';
import Project from "../components/projects/Project";

import "./styles/ProjectSection.scss";

import projectData from "../project_test.json";
import SectionTitle from "../components/SectionTitle";

function ProjectSection(props: {section: {id: string, display: string;}}) {
    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <div className={"projectContainer"}>
                {projectData.map((item) =>
                    <Project
                        title={item.title}
                        links={item.links}
                        description={item.description}
                        tags={item.tags}
                    />
                )}
            </div>
        </div>
    )
}

export default ProjectSection;