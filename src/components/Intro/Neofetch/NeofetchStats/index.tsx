import * as React from "react";

// Style
import "./index.scss";

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


class NeofetchStats extends React.Component<NeofetchStatData> {

    constructor(props : NeofetchStatData) {
        super(props);
    }

    render() {

        return (
            <div className={"stats"}>
                <p className={"neofetchTitle"}>
                    <span className={"user"} >{this.props.title.user}</span>
                    @
                    <span className={"machine"}>{this.props.title.machine}</span>
                </p>

                <p className={"neofetchSeparator"}>----------------------</p>

                {this.props.stats.map((stat) => (
                    <p className={"neofetchStat"}>
                        <span className={"key"}>{stat.key}</span>
                        :&nbsp;
                        <span className={"value"} id={stat.key}>{stat.value}</span>
                    </p>
                ))}
            </div>
        );
    }

    componentDidMount(): void {

        console.log("HI");

        let uptime = document.getElementById("Uptime");
        if (uptime === null) {

            alert("Here");
            return;
        }

        uptime.innerHTML = this.calculateUptime(new Date(1999, 7, 13)).toString();
    }

    calculateUptime(date: Date) {
        // Should retrieve the current date
        let currentDate = new Date();

        // Current minus given { year, month, date } should give the difference
        let years = currentDate.getFullYear() - date.getFullYear();
        let months = currentDate.getMonth() - date.getMonth();
        let days = currentDate.getDate() - date.getDate();

        // Correct negative days (if current date is earlier in the month than the specified day)
        if (days < 0) {
            months -= 1;
        }

        // Correct negative months (can occur from day correction or the current month
        // being earlier than the specified month)
        if (months < 0) {
            years -= 1;
            months += 12;
        }

        // NOTE - This is only used to calculate time since my birthday, and as such there is no correction
        // for a negative year since this should never occur

        // Return string built from info retrieved
        return years.toString() + " years, " + months.toString() + (months.toString() === "1" ? " month" : " months");
    }


}

export default NeofetchStats;