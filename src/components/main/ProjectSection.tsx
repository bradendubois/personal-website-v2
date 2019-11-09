import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import Project from "../projects/Project";
import Trove from "../trove/Trove";

import "./styles/ProjectSection.scss";

import projectData from "../../data/projects.json";


function ProjectSection(props: {section: {id: string, display: string;}}) {
    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <div className={"projectContainer"}>
                {projectData.map((item) =>
                    <Project
                        preview={item.preview}
                        title={item.title}
                        links={item.links}
                        description={item.description}
                        tags={item.tags}
                    />
                )}
            </div>
            <Trove />
        </div>
    )
}

export default ProjectSection;