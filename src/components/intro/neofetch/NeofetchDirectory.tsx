import React from "react";

function NeofetchDirectory(props: {directory: string[]}) {
    return (
        <div>
            <p>{props.directory.map((dir) => (
                <span><span className={"directory"}>{dir}</span>/</span>
            ))}
            </p>
        </div>
    )
}

export default NeofetchDirectory;