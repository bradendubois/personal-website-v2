import React from "react";

import "./styles/NeofetchImage.scss";

export interface Image {
    icon: string;
    alt: string;
}
export interface NeofetchImageData {
    info: Image;
    title: string;
}

function lookup(icon: string): string {

    switch (icon) {
        case ("this"):
            return "this";
    }

    return "this";
}

function NeofetchImage(props: {image: NeofetchImageData}) {
    return (
        <div>
            <img src={lookup(props.image.info.icon)} alt={props.image.info.alt}/>
        </div>
    )
}

export default NeofetchImage;