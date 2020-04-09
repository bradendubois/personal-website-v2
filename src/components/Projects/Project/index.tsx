// React imports
import React, {Component, ReactElement} from "react";

// Stylesheet
import "./index.scss";
import {iconLookup, urlLookup} from "../../../Lookup";

export interface ProjectProps {
    projectIcon: string;

    title: string;
    host: string;

    extraLinks?: {
        iconLabel: string;
        iconAlt: string;
        url: string;
    }[];

    repo: string;
    description: ReactElement;
    tags: string[];

}

interface ProjectState {
    hidden: boolean;
}

class Project extends Component<ProjectProps, ProjectState> {

    constructor(props: ProjectProps) {
        super(props);
        this.state = {
            hidden: true
        };
    }

    componentDidMount(): void {
        setTimeout(() => this.setState({hidden: false}), 0);
    }

    /**
     * Construct a tag from the label it will be given
     * @param tagName a technology or language
     */
    public static makeTag(tagName: string): ReactElement {
        return <div className={tagName.toLowerCase()}>{tagName}</div>
    }

    render() {
        return (
            <div className={"project" + (this.state.hidden ? " hidden" : "")}>

                <a
                    href={urlLookup(this.props.host) + "/" + this.props.repo}
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    <div className={"header"}>
                        <div className={"left"}>
                            <img className={"projectIcon"} src={iconLookup(this.props.projectIcon)} alt={"Project icon"} />
                            <hr />
                            <p>{this.props.title}</p>
                        </div>

                        {this.props.extraLinks ? this.props.extraLinks.map(link =>
                            <a
                                href={urlLookup(link.url)}
                                target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                <img className={"extraIcon"} src={iconLookup(link.iconLabel)} alt={link.iconAlt}/>
                            </a>
                        ) : null}
                        <img className={"repoIcon"} src={iconLookup(this.props.host)} alt={"Icon of " + this.props.host}/>
                    </div>
                </a>

                <div className={"content"}>

                    <div className={"description"}>
                        {this.props.description}
                    </div>

                    <div className={"tags"}>
                        {this.props.tags.map(tag => Project.makeTag(tag))}
                    </div>
                </div>

            </div>
        )
    }
}

export default Project;