import React from "react";

import "./styles/EducationProgram.scss";
import ClassEntry from "./ClassEntry";

interface EducationProgramJSON {
    id: string;
    program: string;
    concentration: string;
    institution: string;
    institutionLogo: {
        image: string;
        alt: string;
        institutionURL: string;
    };
    startYear: number;
    endYear: number;
    location: string;
    courseSets: {
        program: string;
        courseGroups: {
            status: string;
            courses: {
                name: string;
                courseID: string;
                description: string;
            }[];
        }[];
    }[],
    detailSection: {
        sectionTitle: string;
        entry: {
            entryTitle: string;
            points: string[];
        }[];
    }[];
}

function educationImageLookup(logo: string) : string {

    let usaskLogo = "/GitHub-Mark-Light-64px.png";

    switch (logo) {
        case ("usask"):
            return usaskLogo;
        // It'll be an exciting day when there's more cases.
        default:
            return usaskLogo
    }
}

function EducationProgram(props: {entry: EducationProgramJSON}) {

    let entry = props.entry;

    return (
        <div className={"program"} id={entry.id}>

            <div className={"programLogo"}>
                <a href={entry.institutionLogo.institutionURL}>
                    <img
                        src={educationImageLookup(entry.institutionLogo.image)}
                        alt={entry.institutionLogo.alt}
                    />
                </a>
            </div>
            <div className={"headerInfo"}>
                <p className={"institution"}>{entry.institution}</p>
                <p className={"programType"}>{entry.program}</p>
                <p className={"concentration"}>{entry.concentration}</p>
            </div>
            <div className={"timeframeInfo"}>
                <p className={"timeframe"}>{entry.startYear} - {entry.endYear}</p>
                <p className={"location"}>{entry.location}</p>
            </div>
            <div className={"courseInfo"}>

                {entry.courseSets.map((classSet) => (
                    <div className={"classSetContainer"}>
                        <p className={"classSetTitle"}>{classSet.program}</p>
                        {classSet.courseGroups.map((classGroup) => (
                            <ul className={classGroup.status}>
                                {classGroup.courses.map((course) => (
                                    <li><ClassEntry class={course}/></li>
                                ))}
                            </ul>
                        ))}
                    </div>
                ))}

            </div>
            <div className={"detailInfo"}>
                {entry.detailSection.map((infoGroup) => (
                    <div>
                        <p className={"detailTitle"}>{infoGroup.sectionTitle}</p>
                        <ul>
                            {infoGroup.entry.map((point) => (
                                <div>
                                    <li>{point.entryTitle}</li>
                                    <ul>
                                        {point.points.map((detailPoint) =>
                                            (<li>{detailPoint}</li>)
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationProgram;