import React from "react";

function NeofetchDirectory(props: {directory: string[]}) {
    return (
        <div>
            <p>{props.directory.map((dir) => (
                {dir} + "/"
            ))}
            </p>
        </div>
    )
}

export default NeofetchDirectory;