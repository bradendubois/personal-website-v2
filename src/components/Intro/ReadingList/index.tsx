// React imports
import React, {Component} from "react";

// Style
import "./index.scss";

export interface ReadingListProps {
    books: {
        title: string;
        author: string;
    }[];
}

class ReadingList extends Component<ReadingListProps> {

    render() {
        return (
            <div className={"readingListContainer"}>
                {this.props.books.map(book => (
                    <div className={"book"}>
                        <p className={"title"}>{book.title}</p>
                        <p className={"by"}>&nbsp;by&nbsp;</p>
                        <p className={"author"}>{book.author}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default ReadingList;
