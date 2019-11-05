import React from 'react';

import './ProjectTags.scss';

function ProjectTag(props: {type: string, display: string;}) {
    return (
        <div className={props.type}>{props.display}</div>
    )
}

export default ProjectTag;