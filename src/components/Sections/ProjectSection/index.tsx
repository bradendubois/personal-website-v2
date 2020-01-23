import React from 'react';
import SectionTitle from "../../SectionTitle";
import ProjectContainer from "../../Projects/Project/ProjectContainer";
import TroveContainer from "../../Trove/TroveContainer";
import projectData from "../../../json/projects.json";

// Style
import "./index.scss";

function ProjectSection(props: {section: {id: string, display: string;}}) {

    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <div className={"projectsContainer"}>
                {projectData.featured.map((item) =>
                    <ProjectContainer
                        preview={item.preview}
                        title={item.title}
                        links={item.links}
                        description={item.description}
                        tags={item.tags}
                    />
                )}
            </div>
            <TroveContainer />
        </div>
    )
}

export default ProjectSection;