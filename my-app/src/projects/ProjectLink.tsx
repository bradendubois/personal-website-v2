import React from "react";

import './ProjectLink.scss';

function ProjectLink(props: {url: string; image: {path: string; alt: string;}}) {
    return (
        <div>
            <a href={props.url}>
                <img src={props.image.path} alt={props.image.alt} />
            </a>
        </div>
    )
}

export default ProjectLink;