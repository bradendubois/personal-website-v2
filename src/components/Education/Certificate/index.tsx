import React from "react";
import {iconLookup, urlLookup} from "../../../Lookup";

// Style
import "./index.scss";

function Certificate() {
    return (
        <div className={"programContainer certificate"}>

            <a href={urlLookup("usask")} target={"_blank"}>
                <img className={"institutionIcon"} src={iconLookup("usask")} alt={"uSask Logo"} />
            </a>

            <div className={"headerInfo"}>
                <p className={"institution"}>University of Saskatchewan</p>
                <p className={"programType"}>Certificate of Proficiency</p>
                <p className={"concentration"}>Ethics, Justice, and Law</p>
            </div>

            <div className={"timeframeInfo"}>
                <p className={"timeframe"}>2017 - 2020</p>
                <p className={"location"}>Saskatoon, SK</p>
            </div>

            <div className={"classSetContainer phil"}>
                <p className={"title"}>Courses Required</p>
                <hr />
                <ul>
                    <li>Introduction to Ethics and Values</li>
                    <li>Responsibility and Professional Ethics in Computer Science</li>
                    <li>Ethical Theory</li>
                    <li>Philosophy of Technology</li>
                    <li>Social and Political Philosophy</li>
                    <li>Metaethics: Morality, Objectivity, and Identity</li>
                </ul>
            </div>

            <div className={"classSetContainer desc"}>
                <p>Certificate Info.</p>
                <hr />
                <li>Provided study in fundamental ethical theory and its application in moral, legal, social, and technological contexts. Completed alongside B.Sc. degree.</li>
            </div>

        </div>
    )
}

export default Certificate;