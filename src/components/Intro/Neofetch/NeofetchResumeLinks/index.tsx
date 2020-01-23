import React from "react";
import { iconLookup, urlLookup } from "../../../../Lookup";

// Style
import "./index.scss";

export interface NeofetchResumeData {
    display: string;
    reference: string;
    image: {
        icon: string;
        description: string;
    }
}

function Index(props: {resume_links: NeofetchResumeData[]}) {

    return (
        <div className={"resumeLinksContainer"}>
            <p className={"resumeKey"}>Resume:&nbsp;</p>
            <p className={"resumeDefault"}>[&nbsp;</p>
            <div>
                <a
                    href={urlLookup("resume")}
                    target={"_blank"}
                >
                    <p>pdf</p>
                </a>
                <p className={"resumeDefault"}>,&nbsp;&nbsp;</p>
                <img
                    src={iconLookup("pdf-light")}
                    alt={"pdf icon"}
                />
            </div>
            <div>
                <a
                    href={urlLookup("linkedin")}
                    target={"_blank"}
                >
                    <p>linkedin</p>
                </a>
                <p className={"resumeDefault"}>,&nbsp;&nbsp;</p>
                <img
                    src={iconLookup("linkedin-light")}
                    alt={"linkedin logo"}
                />
            </div>
            <div>
                <a
                    href={urlLookup("github")}
                    target={"_blank"}
                >
                    <p>github</p>
                </a>
                <p className={"resumeDefault"}>&nbsp;]</p>
                <img
                    src={iconLookup("github")}
                    alt={"github logo"}
                />
            </div>
        </div>
    )
}

export default Index;