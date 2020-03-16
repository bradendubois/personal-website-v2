import React from "react";
import {iconLookup} from "../../Lookup";

// Style
import "./index.scss";

function Footer() {

    return (
        <div className={"footerContainer"}>
            <div className={"footnote"}>
                <p>designed and developed by <a href={"/"}>me</a></p>
            </div>
        </div>
    )
}

export default Footer;