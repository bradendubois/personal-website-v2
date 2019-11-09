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

function Neofetch(props: {
    image: NeofetchImageData;
    title: { user: string; machine: string; };
    stats: { key: string; value: string}[];
    resume_links: NeofetchResumeData[];
    working_directory: string[];
    colors: string[];})

    {

    return (
        <div className={"neofetchContainer"}>
            <NeofetchImage image={props.image} />
            <div>
                <NeofetchStats title={props.title} stats={props.stats} />
                <NeofetchResumeLinks resume_links={props.resume_links} />
                <NeofetchDirectory directory={props.working_directory} />
            </div>
        </div>
    )
}

export default Neofetch;