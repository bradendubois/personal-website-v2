import React from "react";

import './styles/ProjectLink.scss';

let githubLogo = "/GitHub-Mark-Light-64px.png";
let externalLinkIcon = "/external_link_light.png";

function iconLookup(icon : string) : string {

    switch (icon) {
        case ("github"):
            return githubLogo;
        case ("external"):
            return externalLinkIcon;
    }

    // TODO - Switch to a more general "default" icon
    return externalLinkIcon;
}

function ProjectLink(props: {url: string; image: {icon: string; alt: string;}}) {
    return (
        <div className={"projectLink"}>
            <a href={props.url}>
                <img src={iconLookup(props.image.icon)} alt={props.image.alt} />
            </a>
        </div>
    )
}

export default ProjectLink;