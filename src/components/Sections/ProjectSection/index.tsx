import React from 'react';
import SectionTitle from "../../SectionTitle";
import Project from "../../Projects/Project";
import projectData from "../../../json/projects.json";

// Style
import "./index.scss";
import Projects from "../../Projects/Projects";

function ProjectSection(props: {section: {id: string, display: string;}}) {

    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <div className={"projectContainer"}>
                <h2>Featured</h2>
                {projectData.featured.map((project) => (<Project data={project} />))}
            </div>
        </div>
    )
}

export default ProjectSection;