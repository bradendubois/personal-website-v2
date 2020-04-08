// React imports
import React, {ReactElement} from "react";
import {urlLookup} from "../../../Lookup";

// Component import
import ReadingList from "../ReadingList";

// Style
import "./index.scss";

interface Sentence {
    content: string;
    attrib?: string;
}

interface BioProps {
    bio: Sentence[][];
    readingList: {
        title: string;
        author: string;
    }[];
}

interface BioState {
    displayReadingList: boolean;
}

class Bio extends React.Component<BioProps, BioState> {

    // Store the parsed and cleaned the JSON bio data
    public readonly cleanedData: ReactElement[];

    constructor(props: BioProps) {
        super(props);

        this.state = {
            displayReadingList: false
        };

        // Function binding
        this.toggleDisplayReadingList = this.toggleDisplayReadingList.bind(this);

        // Parse the raw bio data
        this.cleanedData = this.props.bio.map((paragraph) => (
            <div className={"bioSection"}>
                {this.convert(paragraph)}
            </div>
        ));

    }

    /**
     * Converts the raw JSON I've stored my bio in into proper React Elements
     * @param paragraph a list of text in JSON
     */
    private convert(paragraph: Sentence[]): ReactElement[]  {
        let cleanedParagraph: ReactElement[] = [];

        for (let sentence of paragraph) {

            // Optional attrib denotes a clickable *thing*
            if (!sentence.attrib)
                cleanedParagraph.push(<p>{sentence.content}&nbsp;</p>);
            // Special case, show my reading list!
            else if (sentence.attrib === "reading-list")
                cleanedParagraph.push(<a
                    onClick={this.toggleDisplayReadingList}
                    href={"javascript:void();"}
                ><p>{sentence.content}&nbsp;</p>
                </a>);
            // Regular link
            else
                cleanedParagraph.push(<a
                    href={urlLookup(sentence.attrib)}
                ><p>{sentence.content}&nbsp;</p>
                </a>);

        } return cleanedParagraph;
    }

    /**
     * Toggle the visibility of my reading list
     */
    public toggleDisplayReadingList() {
        this.setState({displayReadingList: !this.state.displayReadingList});
    }

    render() {
        return (
            <div className={"bioContainer"}>
                {this.cleanedData}
                {this.state.displayReadingList ? <ReadingList books={this.props.readingList} /> : null}
            </div>
        )
    }
}

export default Bio;