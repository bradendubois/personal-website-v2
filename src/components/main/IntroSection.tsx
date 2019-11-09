import React from "react";

import "./styles/IntroSection.scss";
import SectionTitle from "../../components/SectionTitle";

import introData from "../../data/intro.json";
import Neofetch from "../intro/neofetch/Neofetch";

function IntroSection(props: {section: {id: string, display: string;}}) {

    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <Neofetch
                image={introData.neofetch.image}
                title={introData.neofetch.data.title}
                stats={introData.neofetch.data.stats}
                resume_links={introData.neofetch.resume_links}
                working_directory={introData.neofetch.working_directory}
                colors={introData.neofetch.colors}
            />
        </div>
    )
}

export default IntroSection;