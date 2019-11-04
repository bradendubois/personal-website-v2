import React from 'react';
import ProjectTag from './ProjectTag';

import './ProjectTags.scss';

function ProjectTags(props : {tags: string[]}) {

    // Map each tag to a proper ProjectTag
    let tagList = props.tags.map((tag) => <ProjectTag tag={tag} />);

    return (
        <div className={"tagsContainer"}>
            {tagList}
        </div>
    )
}

export default ProjectTags;