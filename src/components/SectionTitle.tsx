import React from "react";

import "./styles/SectionTitle.scss";

function SectionTitle(props: {display: string}) {
    return (
        <p className={"sectionTitle"}>{props.display}</p>
    )
}

export default SectionTitle;