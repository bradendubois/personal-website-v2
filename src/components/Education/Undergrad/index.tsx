import React from "react";
import {iconLookup, links} from "../../../Lookup";

// Style
import "./index.scss";

function Undergrad() {
    return (
        <div className={"programContainer undergrad"}>

            <a href={links.usask} target={"_blank"}>
                <img className={"institutionIcon"} src={iconLookup("usask")} alt={"uSask Logo"} />
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
                <div className={"classSetContainer cs"}>
                    <p className={"title"}>Computer Science</p>
                    <hr />
                    <ul>
                        <li>CMPT 141 - Intro. to Computer Science</li>
                        <li>CMPT 145 - Principles of Computer Science</li>
                        <li>CMPT 214 - Programming Principles and Practice</li>
                        <li>CMPT 215 - Intro. to Computer Organization and Architecture</li>
                        <li>CMPT 260 - Mathematical Logic and Computing</li>
                        <li>CMPT 270 - Developing Object-Oriented Systems</li>
                        <li>CMPT 280 - Intermediate Data Structures and Algorithms</li>
                        <li>CMPT 317 - Intro. to Artificial Intelligence</li>
                        <li>CMPT 360 - Machines and Algorithms</li>
                        <li>CMPT 364 - Automata and Formal Languages </li>
                        <li>CMPT 370 - Intermediate Software Engineering</li>
                    </ul>
                </div>

                <div className={"classSetContainer phil"}>
                    <p className={"title"}>Philosophy</p>
                    <hr />
                    <ul>
                        <li>PHIL 120 - Knowledge, Mind, and Existence</li>
                        <li>PHIL 133 - Intro. to Ethics and Values</li>
                        <li>PHIL 232 - Ethics and Professional Responsibility in Computer Science</li>
                        <li>PHIL 233 - Ethical Theory</li>
                        <li>PHIL 236 - Ethics and Technology</li>
                        <li>PHIL 262 - Social and Political Philosophy</li>
                        <li>PHIL 298 - Philosophy of Emotions</li>
                        <li>PHIL 333 - Metaethics: Morality, Objectivity, and Identity</li>
                        <li>PHIL 433 - Kantian Ethics</li>
                    </ul>
                </div>

            </div>

            <p className={"achievementsTitle subTitle"}>Achievements</p>

            <div className={"achievements container"}>

                <div className={"entry"}>
                    <p className={"title"}>Computer Science USRA</p>
                    <p className={"time"}>Summer 2020</p>
                    <p className={"desc"}>Recipient of a Department of Computer Science Undergraduate Student Research Assistant award. Working with <a href={links.neufeld}>Professor Eric Neufeld</a> for the summer of 2020.</p>
                </div>

                <hr/>

                <div className={"entry"}>
                    <p className={"title"}>Competitive Programming</p>
                    <p className={"time"}>Fall 2019</p>
                    <p className={"desc"}>Winning team of the Advanced category for the Local Qualifier in the ACM Inter-Collegiate Programming Contest
                        at the University of Saskatchewan. Competed in the Rocky Mountain Regional Qualifier in Edmonton in October 2019,
                        placing 23rd of ~70 teams.</p>
                </div>

                <hr />

                <div className={"entry"}>
                    <p className={"title"}>Unix Bootcamp Presentations</p>
                    <p className={"time"}>Fall 2019</p>
                    <p className={"desc"}>Co-prepared and delivered intermediate-level presentations for the CSSS's Unix Bootcamp.</p>
                </div>

            </div>

            <p className={"groupsTitle subTitle"}>Groups & Societies</p>

            <div className={"groups container"}>
                <div className={"group"}>
                    <p className={"title"}>Arts and Science Students' Union</p>
                    <p className={"role"}>Technical Manager</p>
                    <p className={"membership"}>2017 - Present</p>
                    <ul>
                        <li>Responsible for maintaining the ASSU website (assu.usask.ca).</li>
                        <li>General technical support.</li>
                    </ul>
                </div>

                <hr />

                {/*
                <div className={"group"}>
                    <p className={"title"}>uSask Cyber Security Team</p>
                    <p className={"role"}>VP Challenges</p>
                    <p className={"membership"}>2020 - Present</p>
                    <ul>
                        <li>Responsible for registering the CST in various capture-the-flag (CTF) challenges and other events.</li>
                    </ul>
                </div>


                <hr />
                */}

                <div className={"group"}>
                    <p className={"title"}>Computer Science Students' Society</p>
                    <p className={"role"}>Member</p>
                    <p className={"membership"}>2017 - Present</p>
                </div>

                <hr />

                <div className={"group"}>
                    <p className={"title"}>Competitive Programming Club</p>
                    <p className={"role"}>Member</p>
                    <p className={"membership"}>2019 - Present</p>
                    <ul>
                        <li>The Competitive Programming Club collaborates to share information and strategies so that its members improve at competitive programming the form of contests and various online judges.</li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Undergrad;