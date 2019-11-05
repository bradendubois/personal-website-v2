import React from "react";

import "./styles/EducationSection.scss";

function EducationSection(props: {id: string}) {
    return (
        <div className={"sectionContainer"} id={props.id}>
            <p>Some text!</p>
        </div>
    )
}

export default EducationSection;