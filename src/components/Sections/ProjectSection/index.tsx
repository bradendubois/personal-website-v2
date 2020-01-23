import React from 'react';
import SectionTitle from "../../SectionTitle";
import ProjectContainer from "../../Projects/Project/ProjectContainer";
import TroveContainer from "../../Trove/TroveContainer";
import projectData from "../../../json/projects.json";

// Style
import "./index.scss";
import Projects from "../../Projects/Projects";

function ProjectSection(props: {section: {id: string, display: string;}}) {

    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <Projects />
        </div>
    )
}

export default ProjectSection;