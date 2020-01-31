import React from "react";
import "./index.scss";

import {iconLookup} from "../../../Lookup";
import LinkData from "../../../json/lookup.json";

interface ProjectManifest {

    title: string;
    githubProjectTitle: string;
    description: string;

    tags: {
        type: string;
        display: string;
    }[];

    imagePreviews ?: {
        image : {
            icon: string;
            alt: string;
        };
        title ?: string;
    }[];
}

function githubConstruct(link : string) : string {
    return "https://www.github.com/" + LinkData.githubProfileName  + "/" + link;
}

class Project extends React.Component<{ data : ProjectManifest }> {

    constructor(props: { data : ProjectManifest }) {
        super(props);
    }

    render() {
        return (
            <div className={"project"}>
                <p className={"title"}>{this.props.data.title}</p>

                <a
                    href={githubConstruct(this.props.data.githubProjectTitle)}
                    target={"_blank"}
                >
                    <div>
                        <img src={iconLookup("github")} alt={"github logo"}/>
                        <p className={"link"}>{LinkData.githubProfileName} / {this.props.data.githubProjectTitle}</p>
                    </div>
                </a>

                <p className={"desc"}>{this.props.data.description}</p>
                <div className={"tagContainer"}>
                    {this.props.data.tags.map((tag) => (
                        <div className={"tag " + tag.type}>{tag.display}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Project;