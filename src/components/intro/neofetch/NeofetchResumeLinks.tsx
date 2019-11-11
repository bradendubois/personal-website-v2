import React from "react";

import "./styles/NeofetchResumeLinks.scss";

export interface NeofetchResumeData {
    display: string;
    reference: string;
}

function lookup(reference: string) {

    // TODO - Implement reference -> URL lookup
    return reference;
}

function NeofetchResumeLinks(props: {resume_links: NeofetchResumeData[]}) {

    return (
        <div className={"resumeLinksContainer"}>
            <p className={"resumeKey"}>Resume:&nbsp;</p>
            <p className={"resumeDefault"}>[&nbsp;</p>
            {props.resume_links.map((link) => (
                <span>
                    <a href={lookup(link.reference)}>
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