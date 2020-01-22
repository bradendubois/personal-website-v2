import React from "react";

function SectionTitle(props: {display: string}) {
    return (
        <h1 className={"sectionTitle"}>{props.display}</h1>
    )
}

export default SectionTitle;