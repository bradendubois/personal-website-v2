import React from "react";

import "./styles/NeofetchStats.scss";

export interface NeofetchStatData {
    title: {
        user: string;
        machine: string;
    };
    stats: {
        key: string;
        value: string[];
    }[];
}

function NeofetchStats(props: {title: { user: string; machine: string; }; stats: { key: string; value: string}[];}) {
    return (
        <div className={"neofetchStatContainer"}>
            <p className={"neofetchTitle"}>
                <span className={"statKey"}>{props.title.user}</span>
                <span className={"statDefault"}>@</span>
                <span className={"statValue"}>{props.title.machine}</span>
            </p>

            <p className={"neofetchSeparator"}>-----------</p>

            {props.stats.map((stat) => (
                <p className={"neofetchStat"}>
                    <span className={"statKey"}>{stat.key}</span>
                    <span className={"statDefault"}>: </span>
                    <span className={"statValue"} id={stat.key}>{stat.value}</span>
                </p>
            ))}
        </div>
    )
}

export default NeofetchStats;