// React imports
import React from "react";

// Helper functions
import {iconLookup} from "../../../Lookup";

// Component imports
import NeofetchInfo from "./NeofetchInfo";

// Style
import "./index.scss";

const NeofetchImage = () =>
    <div className={"imageContainer"}>
        <img
            src={iconLookup("headshot")}
            alt={"A headshot of myself"}
            title={"This is probably a photo of a rabbit in sunglasses. If it's not, I got a professional photo of myself done and you missed out on a really cool placeholder."}
        />
    </div>;

const NeofetchDirectory = () =>
    <div className={"directoryContainer"}>
        <p>
            {["~", "professional", "portfolio"].map(dir => (
                <span><span className={"directory"}>{dir}</span> / </span>
            ))}
        </p>
    </div>;

const NeofetchContainer = () =>
    <div className={"neofetchContainer"}>
        <div className={"neofetchMainContent"}>
            {NeofetchImage()}
            <NeofetchInfo />
        </div>
        {NeofetchDirectory()}
    </div>;

export default NeofetchContainer;