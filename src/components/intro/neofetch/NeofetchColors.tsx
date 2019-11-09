import React from "react";

import "./styles/NeofetchColors.scss";

function NeofetchColors(props: {colors: string[];}) {
    return (
        <div>
            {props.colors.map((color) => (
                <div className={color} />
            ))}
        </div>
    )
}

export default NeofetchColors;