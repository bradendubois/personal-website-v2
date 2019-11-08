import React from "react";

import "./styles/IntroSection.scss";
import SectionTitle from "../components/SectionTitle";

function IntroSection(props: {section: {id: string, display: string;}}) {

    return (
        <div className={"sectionContainer"} id={props.section.id}>
            <SectionTitle display={props.section.display}/>
            <p>Some text!</p>
        </div>
    )
}

export default IntroSection;