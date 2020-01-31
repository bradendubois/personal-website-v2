import React from "react";

// Style
import "./index.scss";

class NeofetchColors extends React.Component<{colors: string[];}> {

    render() {

        return (
            <div>
                {this.props.colors.map((color) => (
                    <div  />
                ))}
            </div>
        )
    }
}

export default NeofetchColors;