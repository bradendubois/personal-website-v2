import React from 'react';

function ProjectTag(props: {type: string, display: string;}) {
    return (
        <div className={"tag " + props.type}>{props.display}</div>
    )
}

export default ProjectTag;