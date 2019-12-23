import React from "react";

import "./styles/IntroSection.scss";
import SectionTitle from "../../components/SectionTitle";

import introData from "../../data/intro.json";
import Neofetch from "../intro/neofetch/Neofetch";
import Bio from "../intro/Bio";
import ReadingList from "../intro/ReadingList";

function IntroSection(props: {section: {id: string, display: string;}}) {

    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <div className={"contentContainer"}>
                <Neofetch neofetchData={introData.neofetch} />
                <Bio data={introData.blurb} />
                <ReadingList data={introData.readingList}/>
            </div>
        </div>
    )
}

export default IntroSection;