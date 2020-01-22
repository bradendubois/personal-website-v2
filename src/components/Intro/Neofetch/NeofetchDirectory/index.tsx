import React from "react";

// Style
import "./index.scss";

function Index(props: {directory: string[]}) {
    return (
        <div className={"directoryContainer"}>
            <p>{props.directory.map((dir) => (
                <span><span className={"directory"}>{dir}</span> / </span>
            ))}
            </p>
        </div>
    )
}

export default Index;