import React from 'react';
import SectionTitle from "../SectionTitle";
import FeaturedProject from "./FeaturedProject";
import projectData from "../../json/projects.json";
import ProjectManifest from "./FeaturedProject";

// Style
import "./index.scss";

function ProjectSection(props: {section: {id: string, display: string;}}) {

    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <div className={"projectContainer"}>
                <h2>Featured</h2>
                <div className={"projects"}>
                    {projectData.featured.map((project) => (
                        <FeaturedProject
                            title={project.title}
                            githubProjectTitle={project.githubProjectTitle}
                            description={}
                            tags={}
                            imagePreviews={{project.imagePreviews.map((img) =>
                                image={icon={img.alt}})
                            )}}
                        />))}
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;