import React from 'react';
import ProjectTag from './ProjectTag';

import './ProjectTags.scss';

function ProjectTags(props : {tags: {type: string; display: string;}[]}) {

    // Map each tag to a proper ProjectTag
    let tagList = props.tags.map((tag) => <ProjectTag type={tag.type} display={tag.display} />);

    return (
        <div className={"tagsContainer"}>
            {tagList}
        </div>
    )
}

export default ProjectTags;