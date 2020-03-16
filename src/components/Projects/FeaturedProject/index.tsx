import React from "react";
import "./index.scss";

import {iconLookup} from "../../../Lookup";
import LinkData from "../../../json/lookup.json";

export interface ProjectManifest {

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

class FeaturedProject extends React.Component<ProjectManifest> {

    constructor(props: ProjectManifest) {
        super(props);
    }

    render() {
        return (
            <div className={"projectNew"}>
                <p className={"title"}>{this.props.title}</p>

                <a
                    href={githubConstruct(this.props.githubProjectTitle)}
                    target={"_blank"}
                >
                    <div>
                        <img src={iconLookup("github-dark")} alt={"github logo"}/>
                        <p className={"link"}>
                            <span className={"githubProfileColor"}>
                                {LinkData.githubProfileName}
                            </span> / <span className={"projectTitleColor"}>
                                {this.props.githubProjectTitle}
                            </span>
                        </p>
                    </div>
                </a>

                <p className={"desc"}>{this.props.description}</p>
                <div className={"tagContainer"}>
                    {this.props.tags.map((tag) => (
                        <div className={"tag " + tag.type}>{tag.display}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FeaturedProject;