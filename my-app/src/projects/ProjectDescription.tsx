import React from 'react';

function ProjectDescription(props: {description: string;}) {
    return (
        <div className={"descriptionContainer"}>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectDescription;
