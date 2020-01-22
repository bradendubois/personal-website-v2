import React from "react";
import EducationProgram from "../../Education/EducationProgram";
import educationData from "../../../json/education.json";
import SectionTitle from "../../../components/SectionTitle";

// Style
import "./index.scss";

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