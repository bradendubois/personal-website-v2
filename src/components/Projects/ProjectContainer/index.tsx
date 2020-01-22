import React from 'react';

// Project components
import ProjectCover from "../ProjectCover";
import ProjectHeader from "../ProjectHeader";
import ProjectDescription from "../ProjectDescription";
import ProjectTagContainer from "../ProjectTagContainer";

// Style
import "./index.scss";

// Interface defining the JSON file layout of projects
interface Project {
    title: string;
    preview: {
        icon: string;
        alt: string;
    };
    links: {
        url: string;
        image: {
            icon: string;
            alt: string}
    }[];
    description: string;
    tags: {
        type: string;
        display: string;
    }[];
}

function Project(props: Project) {

    /**
     * A project is divided into three main components for clarity / readability
     *  ProjectHeader - The header consists of the title and any relevant links
     *  ProjectDescription - Medium-length description of the project
     *  ProjectTags - A list of all the languages/tools used
     */
    return (
        <div className={"projectContainer"}>
            { /* <ProjectCover image={props.preview} /> */ }
            <div className={"project"}>
                <ProjectHeader title={props.title} links={props.links}/>
                <ProjectDescription description={props.description}/>
                <ProjectTagContainer tags={props.tags}/>
            </div>
        </div>
    );
}

export default Project;