// React imports
import React from "react";

// Stylesheet
import "./index.scss";
import {urlLookup} from "../../../Lookup";

function ProjectBlurb() {
    return (
        <div className={"projectBlurbContainer"}>
            <p>I keep fairly active on my <a href={urlLookup("github")}>Github</a> at <em><a href={urlLookup("github")}>bradendubois</a></em>. I enjoy using my free time working on projects to learn different languages or technologies, and am always happy to <a href={urlLookup("email")}>receive suggestions/requests/ideas</a>. My favorite project/hobby is <em>competitive programming</em> at present.</p>
        </div>
    )
}

export default ProjectBlurb;