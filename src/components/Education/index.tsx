// React imports
import React from "react";

// Component imports
import SectionTitle from "../SectionTitle";
import Undergrad from "./Undergrad";
import Certificate from "./Certificate";

// Style
import "./index.scss";

// let programs = educationData.map((item) => <EducationProgram entry={item}/>);

const Education = (id: string, display: string) =>
    <div className={"sectionContainer"} id={id}>
        <SectionTitle display={display}/>
        <div className={"educationProgramsContainer"}>
            <hr className={"separator"}/>
            <Undergrad />

            <hr className={"separator"}/>
            <Certificate />
        </div>
    </div>;

export default Education;