import React from "react";

import "./styles/NavBar.scss";

interface Section {
    id: string;
    display: string;
}

function NavBar(props : {page : Section[]}) {

    let tabs = props.page.map((section) => (
        <a href={"#" + section.id}>
            <div className={"navOption"}>
                <p>{section.display}</p>
            </div>
        </a>));

    return (
        <div className={"navContainer"}>
            {tabs}
        </div>
    )
}

export default NavBar;