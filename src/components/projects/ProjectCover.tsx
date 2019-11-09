import React from "react";

import { iconLookup } from "../../Lookup";

import "./styles/ProjectCover.scss";

function ProjectCover(props: {image: {icon: string; alt: string;}}) {
    return (
        <div className={"imageContainer"}>
            <img src={iconLookup(props.image.icon)} alt={props.image.alt}/>
        </div>
    )
}

export default ProjectCover;