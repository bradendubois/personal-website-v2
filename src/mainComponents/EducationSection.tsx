import React from "react";
import EducationProgram from "../education/EducationProgram";

import "./styles/EducationSection.scss";

import educationData from "./educationData.json";

let programs = educationData.map((item) => <EducationProgram entry={item}/>);

function EducationSection(props: {id: string}) {
    return (
        <div className={"sectionContainer"} id={props.id}>
            <div className={"educationProgramsContainer"}>
                {programs}
            </div>
        </div>
    )
}

export default EducationSection;