import React from 'react';
import ProjectTag from '../ProjectTag';

// Style
import "./index.scss";

function Index(props : {tags: {type: string; display: string;}[]}) {

    // Map each tag to a proper ProjectTag
    let tagList = props.tags.map((tag) => <ProjectTag type={tag.type} display={tag.display} />);

    return (
        <div className={"tagsContainer"}>
            {tagList}
        </div>
    )
}

export default Index;