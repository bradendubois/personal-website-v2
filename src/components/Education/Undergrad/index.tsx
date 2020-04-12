// React imports
import React, {ReactElement} from "react";

// Helper functions
import {iconLookup, links} from "../../../Lookup";

// Style
import "./index.scss";

const Undergrad = () => {

    const classSet = (classes: string[], title: string) =>
        <div className={"classSetContainer"}>
            <p className={"title"}>{title}</p>
            <hr/>
            <ul>
                {classes.map(c => <li>{c}</li>)}
            </ul>
        </div>;

    const CMPT_Classes = [
        "CMPT 141 - Intro. to Computer Science",
        "CMPT 145 - Principles of Computer Science",
        "CMPT 214 - Programming Principles and Practice",
        "CMPT 215 - Intro. to Computer Organization and Architecture",
        "CMPT 260 - Mathematical Logic and Computing",
        "CMPT 270 - Developing Object-Oriented Systems",
        "CMPT 280 - Intermediate Data Structures and Algorithms",
        "CMPT 317 - Intro. to Artificial Intelligence",
        "CMPT 360 - Machines and Algorithms",
        "CMPT 364 - Automata and Formal Languages",
        "CMPT 370 - Intermediate Software Engineering",
    ];

    const PHIL_Classes = [
        "PHIL 120 - Knowledge, Mind, and Existence",
        "PHIL 133 - Intro. to Ethics and Values",
        "PHIL 232 - Ethics and Professional Responsibility in Computer Science",
        "PHIL 233 - Ethical Theory",
        "PHIL 236 - Ethics and Technology",
        "PHIL 262 - Social and Political Philosophy",
        "PHIL 298 - Philosophy of Emotions",
        "PHIL 333 - Metaethics: Morality, Objectivity, and Identity",
        "PHIL 433 - Kantian Ethics"
    ];

    const Achievement = (title: string, timestamp: string, desc: ReactElement) =>
        <div className={"entry"}>
            <p className={"title"}>{title}</p>
            <p className={"time"}>{timestamp}</p>
            <span className={"desc"}>{desc}</span>
        </div>;

    const USRA = {
        title: "Computer Science USRA",
        timestamp: "Summer 2020",
        desc: <p>Recipient of a Department of Computer Science Undergraduate Student Research Assistant award.
            Working with <a href={links.neufeld}>Professor Eric Neufeld</a> for the summer of 2020.</p>
    };

    const CompetitiveProgramming = {
        title: "Competitive Programming",
        timestamp: "Fall 2019",
        desc: <p>Winning team of the Advanced category for the Local Qualifier in the ACM Inter-Collegiate
            Programming Contest at the University of Saskatchewan. Competed in the Rocky Mountain Regional
            Qualifier in Edmonton in October 2019, placing 23rd of ~70 teams.</p>
    };

    const UnixBootcamps = {
        title: "Unix Bootcamp Presentations",
        timestamp: "Fall 2019",
        desc: <p>Co-prepared and delivered intermediate-level presentations for the <a href={links.csss}>CSSS</a>'s
            Unix Bootcamp.</p>
    };

    const ShownAchievements = [USRA, CompetitiveProgramming, UnixBootcamps];

    const Group = (group: string, positions: {role: string; timeframe: string, desc?: string[]}[]) =>
        <div className={"group"}>
            <p className={"title"}>{group}</p>
            {positions.map(position =>
                <div>
                    <p className={"role"}>{position.role}</p>
                    <p className={"membership"}>{position.timeframe}</p>
                    {position.desc && <ul>{position.desc.map(point => <li>{point}</li>)}</ul>}
                </div>
            )}
        </div>;

    const ASSU = {
        group: "Arts and Science Students' Union",
        positions: [{
            role: "Technical Manager",
            timeframe: "2017 - Present",
            desc: [
                "Responsible for maintaining the ASSU website (assu.usask.ca).",
                "General technical support."
            ]}]
    };

    const CST = {
        group: "Cyber Security Team",
        positions: [{
            role: "VP Challenges",
            timeframe: "2020 - Present",
            desc: [
                "Responsible for creating the group's monthly curriculum.",
                "Responsible for curating end of month challenges, such as capture-the-flag (CTF) events."
            ]
        }, {
            role: "Member",
            timeframe: "2019 - Present"
        }]
    };

    const CSSS = {
        group: "Computer Science Students' Society",
        positions: [{
            role: "Member",
            timeframe: "2017 - Present"
        }]
    };

    const CompetitiveProgrammingClub = {
        group: "Competitive Programming Club",
        positions: [{
            role: "Member",
            timeframe: "2019 - Present"
        }]
    };

    const ShownGroups = [ASSU, CST, CSSS, CompetitiveProgrammingClub];

    return (

        <div className={"programContainer undergrad"}>

            <a href={links.usask} target={"_blank"}>
                <img className={"institutionIcon"} src={iconLookup("usask")} alt={"uSask Logo"}/>
            </a>

            <div className={"headerInfo"}>
                <p className={"institution"}>University of Saskatchewan</p>
                <p className={"programType"}>B.Sc. Double Honours</p>
                <p className={"concentration"}>Computer Science & Philosophy</p>
            </div>

            <div className={"timeframeInfo"}>
                <p className={"timeframe"}>2017 - 2022</p>
                <p className={"location"}>Saskatoon, SK</p>
            </div>

            <p className={"classesTitle subTitle"}>Relevant Major Courses</p>

            <div className={"classes container"}>
                {classSet(CMPT_Classes, "Computer Science")}
                {classSet(PHIL_Classes, "Philosophy")}
            </div>

            <p className={"achievementsTitle subTitle"}>Achievements</p>

            <div className={"achievements container"}>
                {ShownAchievements
                    .map<any>(ach => Achievement(ach.title, ach.timestamp, ach.desc))
                    .reduce((prev, cur) => [prev, <hr />, cur])}
            </div>

            <p className={"groupsTitle subTitle"}>Groups & Societies</p>

            <div className={"groups container"}>
                {ShownGroups
                    .map<any>(group => Group(group.group, group.positions))
                    .reduce((prev, cur) => [prev, <hr />, cur])}
            </div>
        </div>
    );
};

export default Undergrad;