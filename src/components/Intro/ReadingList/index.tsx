import React from "react";

// Style
import "./index.scss";

function Index(props : { data:{ title: string; desc: string;}[]}) {

    let readingList = props.data.map((book) => (
        <span>
            <h4>·&nbsp;&nbsp;{book.title}&nbsp;&nbsp;·</h4>
            <p>{book.desc}</p>
        </span>
    ));

    return (
        <div id={"reading-list"} className={"readingListContainer hidden"}>
            <h3>My Reading List</h3>
            {readingList}
        </div>
    )
}

export default Index;