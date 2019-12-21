import React from "react";

import "./styles/NeofetchResumeLinks.scss";
import {iconLookup, urlLookup} from "../../../Lookup";

export interface NeofetchResumeData {
    display: string;
    reference: string;
    image: {
        icon: string;
        description: string;
    }
}

function NeofetchResumeLinks(props: {resume_links: NeofetchResumeData[]}) {

    return (
        <div className={"resumeLinksContainer"}>
            <p className={"resumeKey"}>Resume:&nbsp;</p>
            <p className={"resumeDefault"}>[&nbsp;</p>
            {props.resume_links.map((link) => (
                <div>
                    <a
                        href={urlLookup(link.reference)}
                        target={"_blank"}
                    >
                        <p>{link.display}</p>
                    </a>
                    <p className={"resumeDefault"}>,&nbsp;&nbsp;</p>
                    <img
                        src={iconLookup(link.image.icon)}
                        alt={link.image.description}
                    />
                </div>
            ))}
            <p className={"resumeDefault"}>]</p>
        </div>
    )
}

export default NeofetchResumeLinks;