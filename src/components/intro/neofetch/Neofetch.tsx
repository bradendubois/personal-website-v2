import React from "react";

import NeofetchImage from "./NeofetchImage";
import NeofetchData from "./NeofetchData";
import NeofetchLinks from "./NeofetchLinks";
import NeofetchColors from "./NeofetchColors";

import "./styles/Neofetch";

import ImageData from "./NeofetchImage";

function Neofetch(props: {data: string; links: string; colors: string;}) {
    return (
        <div className={"neofetchContainer"}>
            <NeofetchImage />
            <div>
                <NeofetchData data={props.data} />
                <NeofetchLinks links={props.links} />
                <NeofetchColors colors={props.colors} />
            </div>
        </div>
    )
}

export default Neofetch;