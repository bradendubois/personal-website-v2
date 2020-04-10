// React imports
import React, {Component} from "react";

// Helper functions
import {iconLookup, urlLookup} from "../../../../Lookup";

// Style
import "./index.scss";

const NeoStat = (left: string, right: string) =>
    <p className={"neofetchStat"}>
        <span className={"key"}>{left}</span>
        :&nbsp;
        <span className={"value"} id={right}>{right}</span>
    </p>;

const NeoResumeLinks = () =>
    <div className={"resumeLinksContainer"}>
        <p className={"resumeKey"}>Resume</p>
        <p>: [&nbsp;</p>
            {NeoResumeLink("pdf-light", "resume-pdf", "pdf", "PDF icon")}
                <p>,&nbsp;</p>
            {NeoResumeLink("linkedin-light", "linkedin", "LinkedIn", "LinkedIn icon")}
                <p>,&nbsp;</p>
            {NeoResumeLink("github-light", "github", "Github", "Github icon")}
        <p>&nbsp;]</p>
    </div>;

const NeoResumeLink = (icon: string, link: string, text: string, alt: string) =>
    <div className={"resumeLink"}>
        <a
            href={urlLookup(link)}
            target={"_blank"}
            rel="noopener noreferrer"
        >
            <p>{text}</p>
            <img
                src={iconLookup(icon)}
                alt={alt}
            />
        </a>
    </div>;

class NeofetchInfo extends Component {

    render() {

        return (
            <div className={"info"}>

                <p className={"neofetchTitle"}>
                    <span className={"user"} >braden</span>@<span className={"machine"}>earth</span>
                </p>

                <p className={"neofetchSeparator"}>----------------------</p>

                {NeoStat("Host", "Saskatchewan, Canada")}
                {NeoStat("Uptime", NeofetchInfo.calculateUptime(new Date(1999, 7, 13)))}
                {NeoStat("Education", "University of Saskatchewan")}
                {NeoStat("Major(s)", "Computer Science, Philosophy")}
                {NeoStat("Packages", "206")}
                {NeoStat("Resolution", "Corrected to 20/20")}
                {NeoStat("CPU", "Brain")}
                {NeoStat("GPU", "Eye (x2)")}

                <NeoResumeLinks />
            </div>
        );
    }

    public static calculateUptime(date: Date) {
        // Should retrieve the current date
        let currentDate = new Date();

        // Current minus given { year, month, date } should give the difference
        let years = currentDate.getFullYear() - date.getFullYear();
        let months = currentDate.getMonth() - date.getMonth();
        let days = currentDate.getDate() - date.getDate();

        // Correct negative days (if current date is earlier in the month than the specified day)
        if (days < 0) {
            months -= 1;
        }

        // Correct negative months (can occur from day correction or the current month
        // being earlier than the specified month)
        if (months < 0) {
            years -= 1;
            months += 12;
        }

        return [years.toString(), "years,", months.toString(), (months.toString() === "1" ? " month" : " months")].join(" ");
    }
}

export default NeofetchInfo;