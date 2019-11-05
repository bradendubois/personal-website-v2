import React from 'react';

import './Project.scss';

// Project components
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";

// Interface defining the JSON file layout of projects
interface Project {
    title: string;
    links: [{
        url: string;
        image: {
            icon: string;
            alt: string}
    }];
    description: string;
    tags: [{
        type: string;
        display: string;
    }];
}

// TODO - Update the props for most of these components to interfaces
function Project(props: {title: string; links: {url: string; image: {icon: string; alt: string}}[]; description: string; tags: {type: string; display: string;}[]}) {

    /**
     * A project is divided into three main components for clarity / readability
     *  ProjectHeader - The header consists of the title and any relevant links
     *  ProjectDescription - Medium-length description of the project
     *  ProjectTags - A list of all the languages/tools used
     */
    return (
        <div className={"project"}>
            <ProjectHeader title={props.title} links={props.links}/>
            <ProjectDescription description={props.description}/>
            <ProjectTags tags={props.tags}/>
        </div>
    );
}

export default Project;