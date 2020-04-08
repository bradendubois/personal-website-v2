import React, {Component} from 'react';
import SectionTitle from "../SectionTitle";
// Style
import "./index.scss";
import Project, {ProjectProps} from "./Project";
import {urlLookup} from "../../Lookup";
import ProjectBlurb from "./ProjectBlurb";

interface ProjectSectionProps {
    id: string;
    display: string;
}

interface ProjectSectionState {
    projectsShown: number;
}

class ProjectSection extends Component<ProjectSectionProps, ProjectSectionState> {

    constructor(props: ProjectSectionProps) {
        super(props);
        this.state = {
            projectsShown: 4
        };

        this.increaseShown = this.increaseShown.bind(this);
    }

    /**
     * Increase the number projects that will be shown
     */
    public increaseShown(): void {
        this.setState({projectsShown: this.state.projectsShown + 2});
    }

    render() {

        let competitive_programming: ProjectProps = {
            projectIcon: "terminal",
            title: "Competitive Programming",
            host: "github",
            repo: "competitive-programming",
            description: <p>A collection of solutions to <em>competitive programming problems</em>, submitted to online judges, such as <a href={urlLookup("kattis")}>Kattis</a>. I enjoy doing these in my free time.</p>,
            tags: ["cpp", "python"]
        };

        let arch_setup: ProjectProps = {
            projectIcon: "terminal",
            title: "arch setup",
            host: "github",
            repo: "arch-setup",
            description: <p>Installer scripts to quickly <em>set up an Arch-based distro</em> with my custom terminal/shell scripts and install software from the <em>AUR</em>. Sets up any machine to be suitable for my daily workflow. Predecessor to another project that backs up my workspace, <em>arch-backup</em>.</p>,
            tags: ["shell", "git"]
        };

        let website_v2: ProjectProps = {
            projectIcon: "website",
            title: "Personal Website (v2)",
            host: "github",
            repo: "personal-website-v2",
            description: <p>An overhaul of my <em>personal website/portfolio</em> (this one!) built in <em>React</em>, used to showcase projects and achievements. Replaces a version built with <code>HTML</code>/<code>CSS</code>/<code>JavaScript</code> without using any libraries or frameworks.</p>,
            tags: ["html", "scss", "typescript", "react", "git"]
        };

        let dotfiles: ProjectProps = {
            projectIcon: "terminal",
            title: "dotfiles",
            host: "github",
            repo: "dotfiles",
            description: <p>An ever-growing <em>collection of my dotfiles</em> that I use on my daily work machine.</p>,
            tags: ["zsh"]
        };

        let automata: ProjectProps = {
            projectIcon: "delta",
            title: "Automata",
            host: "github",
            repo: "automata",
            description: <p>A fun project made during <em>CMPT 364: Automata and Formal Languages</em> that lets the user create and test various finite automata.</p>,
            tags: ["python"]
        };

        let advent_of_code: ProjectProps = {
            projectIcon: "terminal",
            title: "Advent of Code Solutions",
            host: "github",
            repo: "advent-of-code",
            description: <p>A collection of solutions to the incredibly fun <em><a href={urlLookup("adventofcode")}>Advent of Code</a></em> series of problems.</p>,
            tags: ["cpp", "holiday spirit"]
        };

        // TODO Add 370?

        let projects: ProjectProps[] = [competitive_programming, arch_setup, website_v2, dotfiles, automata, advent_of_code];

        return (
            <div className={"sectionContainer"} id={this.props.id}>
                <SectionTitle display={this.props.display}/>
                <div className={"projectContainer"}>

                    <ProjectBlurb />

                    <div className={"projects"}>

                        {projects.filter((x, idx) => idx < this.state.projectsShown).map((project) => (
                            <Project
                                projectIcon={project.projectIcon}
                                title={project.title}
                                host={project.host}
                                extraLinks={project.extraLinks}
                                repo={project.repo}
                                description={project.description}
                                tags={project.tags}
                            />))}
                    </div>

                    <div className={"projectsShownButton"}>
                        {this.state.projectsShown < projects.length ?
                            <button
                                onClick={this.increaseShown}
                            >Show More</button> : null }
                    </div>

                </div>
            </div>
        )
    }
}

export default ProjectSection;