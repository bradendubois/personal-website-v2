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
        <div>
            {props.resume_links.map((link) => (
                <a href={lookup(link.reference)}>
                    <p>{link.display}</p>
                </a>
            ))}
        </div>
    )
}

export default NeofetchResumeLinks;