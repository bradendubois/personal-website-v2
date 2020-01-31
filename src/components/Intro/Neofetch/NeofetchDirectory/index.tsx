import React from "react";

// Style
import "./index.scss";

class NeofetchDirectory extends React.Component<{directory : string[]}> {

    constructor(props: { directory: string[]}) {
        super(props);
    }

    render() {
        return (
            <div className={"directoryContainer"}>
                <p>
                    {this.props.directory.map((dir) => (
                        <span><span className={"directory"}>{dir}</span> / </span>
                    ))}
                </p>
            </div>
        )
    }
}

export default NeofetchDirectory;