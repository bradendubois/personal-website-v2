import React from "react";

import "./styles/Footer.scss"
import footerData from "../data/footerData.json";
import FooterItem from "../components/footer/FooterItem";

function Footer() {

    return (
        <div className={"footerContainer"}>
            {footerData.links.map((link) => (
                <FooterItem item={link}/>
            ))}
        </div>
    )
}

export default Footer;