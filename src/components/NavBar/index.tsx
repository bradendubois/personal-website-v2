// React imports
import React from "react";

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

    render() {

        return (
            <div id={"navBar"}>
                {this.props.tabs.map((section) => (
                    <a href={"#" + section.id}>
                        <div className={"navOption"}>
                            <p>{section.nav || section.display}</p>
                        </div>
                    </a>))}
            </div>
        )
    }
}

export default NavBar;