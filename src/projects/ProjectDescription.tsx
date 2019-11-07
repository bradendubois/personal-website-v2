import React from 'react';
import "./styles/ProjectDescription.scss";

function ProjectDescription(props: {description: string;}) {
    return (
        <div className={"descriptionContainer"}>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectDescription;
