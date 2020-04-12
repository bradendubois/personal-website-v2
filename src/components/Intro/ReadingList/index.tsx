// React imports
import React from "react";

// Style
import "./index.scss";


const book = (title: string, author: string) =>
    <div className={"book"}>
        <p><span className={"title"}>{title}</span>
            &nbsp;by&nbsp;
        <span className={"author"}>{author}</span></p>
    </div>;

const ReadingList = (books: {title: string, author: string}[]) =>
    <div className={"readingListContainer"}>
        {books.map(b => book(b.title, b.author))}
    </div>;

export default ReadingList;
