import React from "react";

import "./styles/Bio.scss";
import { urlLookup } from "../../Lookup";

function readingListToggle() {
    let list: HTMLElement | null = document.getElementById("reading-list");
    if (list != null) {
        if (list.classList.contains("hidden"))
            list.classList.remove("hidden");
        else
            list.classList.add("hidden");
    }

}

function convert(data: {content: string; link: string;}) {
    if (data.link == "") return (
        data.content
    ); else if (data.link == "reading-list") return (
        <a onClick={readingListToggle} href={"javascript:void();"}>{data.content}</a>
    ); else return (
        <a href={urlLookup(data.link)}>{data.content}</a>
    );
}

function Bio(props: {data: {content: string; link: string;}[][]}) {

    let bio = props.data.map((section) => (
        <div className={"bioSection"}>
            <p>
                {section.map((sec) => (convert(sec)))}
            </p>
        </div>
    ));

    return (
        <div className={"bioContainer"}>
            {bio}
        </div>
    )
}

export default Bio;