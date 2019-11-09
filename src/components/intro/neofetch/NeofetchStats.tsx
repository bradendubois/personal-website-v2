import React from "react";

import "./styles/NeofetchStats.scss";

export interface NeofetchStatData {
    title: {
        user: string;
        machine: string;
    };
    stats: {
        key: string;
        value: string;
    }[];
}

function NeofetchStats(props: {data: NeofetchStatData}) {
    return (
        <div className={"neofetchStatContainer"}>
            <p className={"neofetchTitle"}>
                <span className={"statKey"}>{props.data.title.user}</span>
                <span className={"statDefault"}>@</span>
                <span className={"statValue"}>{props.data.title.machine}</span>
            </p>

            <p className={"neofetchSeparator"}>-----------</p>

            {props.data.stats.map((stat) => (
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