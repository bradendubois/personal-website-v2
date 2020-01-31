import React from "react";
import { iconLookup } from "../../../../Lookup"

// Style
import "./index.scss";

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