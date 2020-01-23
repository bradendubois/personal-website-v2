import React from 'react';

// Style
import "./index.scss";

function ProjectDescription(props: {description: string;}) {
    return (
        <div className={"descriptionContainer"}>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectDescription;
