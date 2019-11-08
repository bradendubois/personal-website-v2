import React from "react";

import "./styles/FooterItem.scss";

interface FooterItem {
    image: {
        icon: string;
        alt: string;
    }

    link: string;
    display: string;
}

function lookup(icon: string) {

    let github = "/GitHub-Mark-Light-64px.png";
    let linkedin = "/linkedin_alt_final.png";
    let email = "/email_final.png";

    switch (icon) {
        case ("github"):
            return github;
        case ("linkedin"):
            return linkedin;
        case ("email"):
            return email;
    }

    return github;
}

function FooterItem(props: {item: FooterItem}) {
    return (
        <div className={"footerItem"}>
            <a href={props.item.link} target={"_blank"}>
                <div>
                    <img src={lookup(props.item.image.icon)} alt={props.item.image.alt} />
                    <p>{props.item.display}</p>
                </div>
            </a>
        </div>
    )
}

export default FooterItem;