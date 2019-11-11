import React from "react";

import "./styles/NeofetchImage.scss";

export interface NeofetchImageData {
    info: {
        icon: string;
        alt: string;
    }
    title: string;
}

function lookup(icon: string): string {

    let rabbit = "/sunglasses_rabbit_1.jpg";
    return rabbit;

    switch (icon) {
        case ("this"):
            return "this";
    }

    return "this";
}

function NeofetchImage(props: {image: NeofetchImageData}) {
    return (
        <div className={"imageContainer"}>
            <img
                src={lookup(props.image.info.icon)}
                alt={props.image.info.alt}
                title={props.image.title}
            />
        </div>
    )
}

export default NeofetchImage;