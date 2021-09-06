import React from "react";

import {DatesArray} from "../../helpers/interfaces";

import {compareArray} from "./compareArray";
import {formattingArray} from "./formattingArray";

import ListItem from "../../components/ListItem/ListItem";

interface ListContainerProps {
    array?: DatesArray[];
}

const ListContainer: React.FC<ListContainerProps> = ({array}) => {
    let temp = compareArray(array);
    let list: any = formattingArray(temp);

    return (
        <div>
            {list && list.map((val: any, key: any) => (
                <div key={key}>
                    <ListItem day={val.day} />
                    {val.array && val.array.map((value: any) => <ListItem item={value} key={value.id} />)}
                </div>
            ))}
        </div>
    )
};

export default ListContainer;