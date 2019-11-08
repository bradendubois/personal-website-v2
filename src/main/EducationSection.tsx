import React from "react";
import EducationProgram from "../components/education/EducationProgram";

import "./styles/EducationSection.scss";

import educationData from "../data/education.json";
import SectionTitle from "../components/SectionTitle";

let programs = educationData.map((item) => <EducationProgram entry={item}/>);

function EducationSection(props: {section: {id: string, display: string;}}) {
    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <div className={"educationProgramsContainer"}>
                {programs}
            </div>
        </div>
    )
}

export default EducationSection;