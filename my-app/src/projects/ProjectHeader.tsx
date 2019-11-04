import React from 'react';
import ProjectLink from "./ProjectLink";

import './ProjectHeader.scss';

function ProjectHeader(props: {title: string; links: {url: string; image: {path: string; alt: string}}[]}) {

    // Map each link{url, image} to a proper ProjectLink object
    let links = props.links.map((link) => <ProjectLink url={link.url} image={link.image}/>);

    return (
        <div className={"headerContainer"}>
            <div className={"titleContainer"}>
                <p>{props.title}</p>
            </div>
            <div className={"linksContainer"}>
                {links}
            </div>
        </div>
    )
}

export default ProjectHeader;