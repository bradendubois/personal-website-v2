import React from "react";
import { iconLookup, urlLookup } from "../../../../Lookup";

// Style
import "./index.scss";

export interface NeofetchResumeData{
    data : {
        display: string;
        reference: string;
        image: {
            icon: string;
            description: string;
        };
    }[];
}

class NeofetchResumeLinks extends React.Component<NeofetchResumeData> {

    constructor(props: NeofetchResumeData) {
        super(props);
    }

    render() {

        return (
            <div className={"resumeLinksContainer"}>
                <p className={"resumeKey"}>Resume</p>

                <p className={"resumeDefault"}>: [&nbsp;</p>

                {this.props.data.map((link) => (
                    <div className={"resumeLink"}>
                        <a
                            href={urlLookup(link.reference)}
                            target={"_blank"}
                        >
                            <p>{link.display}&nbsp;</p>
                        </a>
                        <img
                            src={iconLookup(link.image.icon)}
                            alt={link.image.description}
                        />
                    </div>
                ))}

                <p className={"resumeDefault"}>&nbsp;]</p>
            </div>
        )
    }
}

export default NeofetchResumeLinks;