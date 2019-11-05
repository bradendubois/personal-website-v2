import React from "react";

function IntroSection(props: {id: string}) {
    return (
        <div id={props.id}>
            <p>{introData.greeting}</p>
        </div>
    )
}

export default IntroSection;