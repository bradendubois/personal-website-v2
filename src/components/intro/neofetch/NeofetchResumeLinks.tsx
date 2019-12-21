import React from "react";

import "./styles/NeofetchResumeLinks.scss";
import {urlLookup} from "../../../Lookup";

export interface NeofetchResumeData {
    display: string;
    reference: string;
}

function NeofetchResumeLinks(props: {resume_links: NeofetchResumeData[]}) {

    return (
        <div className={"resumeLinksContainer"}>
            <p className={"resumeKey"}>Resume:&nbsp;</p>
            <p className={"resumeDefault"}>[&nbsp;</p>
            {props.resume_links.map((link) => (
                <span>
                    <a
                        href={urlLookup(link.reference)}
                        target={"_blank"}
                    >
                        <p>{link.display}</p>
                    </a>
                    <p className={"resumeDefault"}>,&nbsp;</p>
                </span>
            ))}
            <p className={"resumeDefault"}>]</p>
        </div>
    )
}

export default NeofetchResumeLinks;