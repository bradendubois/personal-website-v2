import React from "react";
import FooterItem from "../footer/FooterItem";

import "./styles/Footer.scss"

import footerData from "../../data/footer.json";

function Footer() {

    return (
        <div className={"footerContainer"}>
            <div>
                {footerData.links.map((link) => (
                    <FooterItem item={link}/>
                ))}
            </div>
            <div className={"footnote"}>
               <p>designed and developed by <a href={"/"}>me</a></p>
            </div>
        </div>
    )
}

export default Footer;