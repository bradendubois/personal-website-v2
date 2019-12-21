import React from "react";

import "./styles/Bio.scss";
import { urlLookup } from "../../Lookup";

function convert(data: {content: string; link: string;}) {
    if (data.link == "") return (
        data.content
    ); else return (
        <a href={urlLookup(data.link)}>{data.content}</a>
    );
}

function Bio(props: {data: {content: string; link: string;}[][]}) {

    let bio = props.data.map((section) => (
        <div>
            {section.map((sec) => (
                <p>{convert(sec)}</p>
            ))}
        </div>
    ));

    return (
        <div className={"bioContainer"}>
            {bio}
        </div>
    )
}

export default Bio;