import React from "react";

import "./styles/IntroSection.scss";
import SectionTitle from "../../components/SectionTitle";

import introData from "../../data/intro.json";
import Neofetch from "../intro/neofetch/Neofetch";
import Bio from "../intro/Bio";
function IntroSection(props: {section: {id: string, display: string;}}) {

    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <Neofetch neofetchData={introData.neofetch} />
            <Bio data={introData.blurb} />
        </div>
    )
}

export default IntroSection;