// React imports
import React from "react";

// Component imports
import Bio from "./Bio";
import SectionTitle from "../SectionTitle";
import NeofetchContainer from "./Neofetch";

// Style
import "./index.scss";

const IntroSection = (id: string, display: string) =>
    <div className={"sectionContainer"} id={id}>
        <SectionTitle display={display}/>
        <div className={"contentContainer"}>
            <NeofetchContainer/>
            <Bio />
        </div>
    </div>;

export default IntroSection;