import React from "react";

import NeofetchImage from "./NeofetchImage";
import NeofetchStats from "./NeofetchStats";
import NeofetchResumeLinks from "./NeofetchResumeLinks";
import NeofetchColors from "./NeofetchColors";
import NeofetchDirectory from "./NeofetchDirectory";

import "./styles/Neofetch.scss";

import { NeofetchImageData } from "./NeofetchImage";
import { NeofetchStatData } from "./NeofetchStats";
import { NeofetchResumeData } from "./NeofetchResumeLinks";

interface NeofetchInterface {
    image: NeofetchImageData;
    data: NeofetchStatData;
    resume_links: NeofetchResumeData[];
    working_directory: string[];
    colors: string[];
}

function Neofetch(props: {neofetchData: NeofetchInterface}) {

    return (
        <div className={"neofetchContainer"}>
            <div className={"neofetchMainInfoContainer"}>
                <NeofetchImage image={props.neofetchData.image} />
                <div className={"neofetchStatContainer"}>
                    <NeofetchStats data={props.neofetchData.data} />
                    <NeofetchResumeLinks resume_links={props.neofetchData.resume_links} />
                    <NeofetchColors colors={props.neofetchData.colors}/>
                </div>
            </div>
            <NeofetchDirectory directory={props.neofetchData.working_directory} />
        </div>
    )
}

export default Neofetch;