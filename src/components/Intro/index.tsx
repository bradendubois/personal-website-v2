// React imports
import React from "react";

// Component imports
import Bio from "./Bio";
import SectionTitle from "../SectionTitle";
import NeofetchContainer from "./Neofetch";

// Style
import "./index.scss";

// Data
import introData from "../../json/intro.json";

interface IntroSectionProps {
    id: string;
    display: string;
}

function IntroSection(props: IntroSectionProps) {

    return (
        <div className={"sectionContainer"} id={props.id}>
            <SectionTitle display={props.display}/>
            <div className={"contentContainer"}>
                <NeofetchContainer />
                <Bio
                    bio={introData.blurb}
                    readingList={introData.readingList}
                />
            </div>
        </div>
    )
}

export default IntroSection;