import React from "react";

import NeofetchImage from "./NeofetchImage";
import NeofetchData from "./NeofetchData";
import NeofetchLinks from "./NeofetchLinks";
import NeofetchColors from "./NeofetchColors";

import "./styles/Neofetch";

function Neofetch(props: {image: ImageData; data: string; links: string; colors: string;}) {
    return (
        <div className={"neofetchContainer"}>
            <NeofetchImage image={props.image} />
            <div>
                <NeofetchData data={props.data} />
                <NeofetchLinks links={props.links} />
                <NeofetchColors colors={props.colors} />
            </div>
        </div>
    )
}

export default Neofetch;