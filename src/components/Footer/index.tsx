import React from "react";
import {iconLookup} from "../../Lookup";

// Style
import "./index.scss";

interface Index {
    image: {
        icon: string;
        alt: string;
    }

    link: string;
    display: string;
}

function FooterItem(props: {item: Index}) {
    return (
        <div className={"footerItem"}>
            <a href={props.item.link} target={"_blank"}>
                <div>
                    <img src={iconLookup(props.item.image.icon)} alt={props.item.image.alt} />
                    <p>{props.item.display}</p>
                </div>
            </a>
        </div>
    )
}

export default FooterItem;