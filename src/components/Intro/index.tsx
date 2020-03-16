import React from "react";
import SectionTitle from "../SectionTitle";
import introData from "../../json/intro.json";
import NeofetchContainer from "./Neofetch";
import Bio from "./Bio";
import ReadingList from "./ReadingList";

// Style
import "./index.scss";

function IntroSection(props: {section: {id: string, display: string;}}) {

    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <div className={"contentContainer"}>
                <NeofetchContainer />
                <Bio data={introData.blurb} />
                <ReadingList data={introData.readingList}/>
            </div>
        </div>
    )
}

export default IntroSection;