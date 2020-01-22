import React from "react";

// Style
import "./index.scss";

interface Section {
    id: string;
    display: string;
}


// TODO - This event is not firing on scroll
export function navBarHeightAdjust() {

    let navBar = document.getElementById("navBar");

    if (navBar == null) {
        alert("Nope");
        return;
    } else if (navBar.offsetTop == 0) {
        navBar.classList.remove("minimalHeight");
    } else {
        navBar.classList.add("minimalHeight")
    }
}


function NavBar(props : {page : Section[]}) {

    let tabs = props.page.map((section) => (
        <a href={"#" + section.id}>
            <div className={"navOption"}>
                <p>{section.display}</p>
            </div>
        </a>));

    return (
        <div
            id={"navBar"}
            className={"navContainer"}
        >
            {tabs}
        </div>
    )
}

export default NavBar;