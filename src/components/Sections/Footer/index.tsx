import React from "react";
import FooterItem from "../../Footer/";
import footerData from "../../../json/footer.json";

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