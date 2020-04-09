// React imports
import React, {Component} from "react";

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

class IntroSection extends Component<IntroSectionProps> {

    render() {

        return (
            <div className={"sectionContainer"} id={this.props.id}>
                <SectionTitle display={this.props.display}/>
                <div className={"contentContainer"}>
                    <NeofetchContainer/>
                    <Bio
                        bio={introData.blurb}
                        readingList={introData.readingList}
                    />
                </div>
            </div>
        )
    }
}

export default IntroSection;