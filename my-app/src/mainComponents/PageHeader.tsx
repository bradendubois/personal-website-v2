import React from "react";

import "./PageHeader.scss";

interface Section {
    id: string;
    display: string;
}

function PageHeader(props : {page : Section[]}) {

    let tabs = props.page.map((section) => (
        <div className={"navOption"}>
            <a href={"#" + section.id}>
                <p>{section.display}</p>
            </a>
        </div>));

    return (
        <div className={"navContainer"}>
            {tabs}
        </div>
    )
}

export default PageHeader;