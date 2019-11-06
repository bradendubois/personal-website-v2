import React from "react";

interface ClassEntryJSON {
    name: string;
    courseID: string;
    description: string;
}

function ClassEntry(props: {class: ClassEntryJSON}) {
    // TODO - Make this a more expandable entry to utilize all the info provided
    return (
        <p>{props.class.name}</p>
    )
}

export default ClassEntry;