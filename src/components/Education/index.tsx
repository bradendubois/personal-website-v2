import React from "react";

// Style
import "./index.scss";

import SectionTitle from "../SectionTitle";
import Undergrad from "./Undergrad";
import Certificate from "./Certificate";

// let programs = educationData.map((item) => <EducationProgram entry={item}/>);

function Education(props: {section: {id: string, display: string;}}) {
    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <div className={"educationProgramsContainer"}>
                <hr className={"separator"}/>
                <Undergrad />
                <hr className={"separator"}/>
                <Certificate />
            </div>
        </div>
    )
}

export default Education;