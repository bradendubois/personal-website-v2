import React from 'react';

import './Project.scss';

import ProjectHeader from "./ProjectHeader";
import ProjectCenter from "./ProjectCenter";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";

// TODO import github_logo from '../images/github_logo.jpg';

function Project(props: {title: string; links: {url: string; image: {path: string; alt: string}}[]; description: string; tags: string[]}) {
    return (
        <div className={"container"}>
            <ProjectHeader title={props.title} links={props.links}/>
            <ProjectDescription description={props.description}/>
            <ProjectTags tags={props.tags}/>
        </div>
    );
}

export default Project;