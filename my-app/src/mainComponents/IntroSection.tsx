import React from "react";

import "./styles/IntroSection.scss";

function IntroSection(props: {id: string}) {

    return (
        <div className={"introContainer"} id={props.id}>
            <p>Some text!</p>
        </div>
    )
}

export default IntroSection;