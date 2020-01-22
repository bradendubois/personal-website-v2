import React from "react";

// Style
import "./index.scss";

function Index(props: {colors: string[];}) {
    return (
        <div>
            {props.colors.map((color) => (
                <div className={color} />
            ))}
        </div>
    )
}

export default Index;