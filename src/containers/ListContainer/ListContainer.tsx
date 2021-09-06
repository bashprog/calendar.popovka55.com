import React from "react";

import {DatesArray} from "../../interfaces";

import {compareArray} from "./compareArray";
import {formattingArray} from "./formattingArray";

interface ListContainerProps {
    array?: DatesArray[];
}

const ListContainer:React.FC<ListContainerProps> = ({array}) => {
    let temp = compareArray(array);
    let list = formattingArray(temp);

    console.log(list);

    return(
        <div>
            ListContainer
        </div>
    )
};

export default ListContainer;