import React from "react";

import NeofetchImage from "./NeofetchImage";
import NeofetchInfo from "./NeofetchInfo";
import NeofetchDirectory from "./NeofetchDirectory";

// Style
import "./index.scss";

import NeofetchData from "../../../json/neofetch.json";

class NeofetchContainer extends React.Component {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <div className={"neofetchContainer"}>
                <div className={"neofetchMainContent"}>
                    <NeofetchImage
                        info={NeofetchData.image.info}
                        title={NeofetchData.image.title}
                    />
                    <NeofetchInfo
                        title={NeofetchData.data.title}
                        stats={NeofetchData.data.stats}
                        data={NeofetchData.resume_links}
                    />
                </div>
                <NeofetchDirectory directory={NeofetchData.working_directory}/>
            </div>
        )
    }
}

export default NeofetchContainer;