import React from "react";

import "./styles/SectionTitle.scss";

function SectionTitle(props: {display: string}) {
    return (
        <h1 className={"sectionTitle"}>{props.display}</h1>
    )
}

export default SectionTitle;