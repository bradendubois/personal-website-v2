import React from "react";
import ClassEntry from "../ClassEntry";
import EducationProgramInterface from "../EducationProgramInterface";
import { iconLookup } from "../../../Lookup";

// Style
import "../index.scss";


/**
 * Create the layout of one single educational program (i.e., undergrad, certificate, graduate)
 * @param props a set of information conforming to the interface defined as EducationProgramInterface
 */
function Index(props: {entry: EducationProgramInterface}) {

    let entry = props.entry;

    return (

        // The container for one single program entry
        <div className={"programContainer"} id={entry.id} >

            { /* hr to separate programs and for style */ }
            <hr />

            { /* The logo of the institution */ }
            <div className={"programLogo"}>
                <a href={entry.institutionLogo.institutionURL} target={"_blank"}>
                    <img
                        src={iconLookup(entry.institutionLogo.image)}
                        alt={entry.institutionLogo.alt}
                    />
                </a>
            </div>

            { /* This is the main information of the general program */ }
            <div className={"headerInfo"}>
                <p className={"institution"}>{entry.institution}</p>
                <p className={"programType"}>{entry.program}</p>
                <p className={"concentration"}>{entry.concentration}</p>
            </div>

            { /* This is the timeframe info of an entry, year/location  */ }
            <div className={"timeframeInfo"}>
                <p className={"timeframe"}>{entry.startYear} - {entry.endYear}</p>
                <p className={"location"}>{entry.location}</p>
            </div>

            { /* This is a list(s) of relevant courses taken */ }
            <div className={"courseInfo"}>

                { /* This maps each *set* of classes (CS, PHIL) into a list */ }
                {entry.courseSets.map((classSet) => (
                    <div className={"classSetContainer"}>

                        { /* This is the "title" (usually the major itself)  */ }
                        <p className={"classSetTitle"}>{classSet.program}</p>


                            { /* This maps each group of classes (groups being *taken*, *during*, etc. */ }
                            {classSet.courseGroups.map((classGroup) => (
                                <div>
                                    <ul>
                                        {classGroup.courses.map((course) => (
                                            <li className={classGroup.status}><ClassEntry class={course}/></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
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
                            { /* TODO - Maybe move this area into its own file for simplicity */ }
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
        </div>
    )
}

export default Index;