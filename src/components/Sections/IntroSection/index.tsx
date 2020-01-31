import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import introData from "../../../json/intro.json";
import NeofetchContainer from "../../Intro/Neofetch/NeofetchContainer";
import Bio from "../../Intro/Bio/";
import ReadingList from "../../Intro/ReadingList";

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