import React from "react";
import "./styles/EducationProgram.scss";
import ClassEntry from "./ClassEntry";
import EducationProgramInterface from "./EducationProgramInterface";

/**
 * Given an icon name/label, return the institution image/logo
 * @param logo is the icon/logo descriptor, only "usask" right now
 */
function educationImageLookup(logo: string) : string {

    // Only logo right now :)
    let usaskLogo = "/usask.jpg";

    // Switch over the logo given
    switch (logo) {
        case ("usask"):
            return usaskLogo;

        // It'll be an exciting day when there's more cases.

        default:
            return usaskLogo;
    }
}

function EducationProgram(props: {entry: EducationProgramInterface}) {

    let entry = props.entry;

    return (
        <div className={"program"} id={entry.id}>

            <div className={"programLogo"}>
                <a href={entry.institutionLogo.institutionURL} target={"_blank"}>
                    <img
                        src={educationImageLookup(entry.institutionLogo.image)}
                        alt={entry.institutionLogo.alt}
                    />
                </a>
            </div>

            { /* This is the info in the top middle of  */ }
            <div className={"headerInfo"}>
                <p className={"institution"}>{entry.institution}</p>
                <p className={"programType"}>{entry.program}</p>
                <p className={"concentration"}>{entry.concentration}</p>
            </div>

            { /* This is the info in the top-right corner of an entry, year/location  */ }
            <div className={"timeframeInfo"}>
                <p className={"timeframe"}>{entry.startYear} - {entry.endYear}</p>
                <p className={"location"}>{entry.location}</p>
            </div>
            <div className={"courseInfo"}>

                { /* This maps each *set* of classes (CS, PHIL) into a list */ }
                {entry.courseSets.map((classSet) => (
                    <div className={"classSetContainer"}>

                        { /* This is the "title" (usually the major itself)  */ }
                        <p className={"classSetTitle"}>{classSet.program}</p>

                        <ul>
                            { /* This maps each group of classes (groups being *taken*, *during*, etc. */ }
                            {classSet.courseGroups.map((classGroup) => (
                                classGroup.courses.map((course) => (
                                    <li className={classGroup.status}><ClassEntry class={course}/></li>
                                ))
                            ))}

                        </ul>
                    </div>
                ))}

            </div>

            { /* This maps each block of information to its own div with a list of the information */ }
            <div className={"detailInfo"}>

                { /* This is each category/group of information (volunteer info, achievements, etc.) */ }
                {entry.detailSection.map((infoGroup) => (
                    <div>
                        <p className={"detailTitle"}>{infoGroup.sectionTitle}</p>
                        <ul>
                            {infoGroup.entry.map((point) => (
                                <div>
                                    <li>{point.entryTitle}</li>
                                    <ul>
                                        {point.points.map((detailPoint) => (<li>{detailPoint}</li>))}
                                    </ul>
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    )
}

export default EducationProgram;