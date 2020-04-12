// React imports
import React, {ReactElement, useState} from "react";
import {links} from "../../../Lookup";

// Component import
import ReadingList from "../ReadingList";

// Style
import "./index.scss";

let books: {title: string, author: string}[] = [
    {title: "Hitchhiker's Guide to the Galaxy", author: "Douglas Adams"},
    {title: "Zen and the Art of Motorcycle Maintenance", author: "Robert Pirsig"},
    {title: "Mismatch", author: "Kat Holmes"},
    {title: "1984", author: "George Orwell"},
    {title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick"},
    {title: "Brave New World", author: "Aldous Huxley"},
    {title: "At The Existentialist Cafe: Freedom, Being, and Apricot Cocktails", author: "Sarah Bakewell"},
    {title: "Dawn of the New Everything", author: "Jaron Lanier"},
    {title: "A Song of Ice and Fire", author: "George RR Martin"},
    {title: "Island", author: "Aldous Huxley"}
];

const Bio = () => {

    const [displayReadingList, setDisplayReadingList] = useState(false);
    const blurb: ReactElement = <p>I'm an undergraduate student at
        the <a href={links.usask}>University of Saskatchewan</a> pursuing a B.Sc. (Double Honours) in
        Computer Science and Philosophy. My free time is usually
        spent <a href={links.competitiveProgramming}>making fun projects</a>
        , <button onClick={() => setDisplayReadingList(!displayReadingList)}>reading</button>, or solving <a
            href={links.competitiveProgramming}>competitive
            programming problems</a> through online judges, like <a href={links.kattis}>Kattis</a>.</p>;

    return (
        <div className={"bioContainer"}>
            <div className={"blurb"}>
                {blurb}
            </div>
            {displayReadingList && ReadingList(books)}
        </div>
    )
};

export default Bio;