import React from "react";
import { iconLookup } from "../../../../Lookup";

// Style
import "./index.scss";

export interface NeofetchImageData {
    info: {
        icon: string;
        alt: string;
    }
    title: string;
}

function NeofetchImage(props: {image: NeofetchImageData}) {
    return (
        <div className={"imageContainer"}>
            <img
                src={iconLookup(props.image.info.icon)}
                alt={props.image.info.alt}
                title={props.image.title}
            />
        </div>
    )
}

export default NeofetchImage;