import React from "react";
import ReactDOM from "react-dom";

// Style
import "./index.scss";

interface NavProps {
    tabs: {
        id: string;
        display: string;
        nav?: string;
    }[];
}

class NavBar extends React.Component<NavProps> {

    constructor(props: NavProps) {
        super(props);
    }

    render() {

        let tabs = this.props.tabs.map((section) => (
            <a href={"#" + section.id}>
                <div className={"navOption"}>
                    <p>{section.nav ? section.nav : section.display}</p>
                </div>
            </a>));

        return (
            <div id={"navBar"}>
                {tabs}
            </div>
        )
    }
}

export default NavBar;