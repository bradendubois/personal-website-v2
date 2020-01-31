import React from "react";

import NeofetchImage from "../NeofetchImage";
import NeofetchStats from "../NeofetchStats";
import NeofetchResumeLinks from "../NeofetchResumeLinks";
import NeofetchColors from "../NeofetchColors";
import NeofetchDirectory from "../NeofetchDirectory";

// Style
import "./index.scss";

import NeofetchData from "../../../../json/neofetch.json";

class NeofetchContainer extends React.Component {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <div className={"neofetchContainer"}>
                <NeofetchImage
                    info={NeofetchData.image.info}
                    title={NeofetchData.image.title}
                />
                <NeofetchStats
                    title={NeofetchData.data.title}
                    stats={NeofetchData.data.stats}
                />
                <NeofetchResumeLinks data={NeofetchData.resume_links}/>
                <NeofetchColors colors={NeofetchData.colors}/>
                <NeofetchDirectory directory={NeofetchData.working_directory}/>
            </div>
        )
    }
}

export default NeofetchContainer;