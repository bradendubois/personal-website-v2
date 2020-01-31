import React from "react";
import { iconLookup } from "../../../../Lookup";

// Style
import "./index.scss";

export interface NeofetchImageData {
    info: {
        icon: string;
        alt: string;
    }
    title: string;
}

class NeofetchImage extends React.Component<NeofetchImageData> {

    constructor(props: NeofetchImageData) {
        super(props);
    }

    render() {
        return (
            <div className={"imageContainer"}>
                <img
                    src={iconLookup(this.props.info.icon)}
                    alt={this.props.info.alt}
                    title={this.props.title}
                />
            </div>
        )
    }
}

export default NeofetchImage;