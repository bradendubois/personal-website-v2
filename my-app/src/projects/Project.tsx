import React from 'react';

import './Project.scss';

// Project components
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";

function Project(props: {title: string; links: {url: string; image: {path: string; alt: string}}[]; description: string; tags: {type: string; display: string;}[]}) {
    return (
        <div className={"container"}>
            <ProjectHeader title={props.title} links={props.links}/>
            <ProjectDescription description={props.description}/>
            <ProjectTags tags={props.tags}/>
        </div>
    );
}

export default Project;