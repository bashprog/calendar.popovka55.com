import React from "react";

import {DatesArray} from "../../helpers/interfaces";

interface ListItemsProps {
    day?: string;
    item?: DatesArray;
}

const ListItem: React.FC<ListItemsProps> = ({day, item}) => {
    console.log(item);
    return(
        <div>
            {day ?
                <div>
                    {day}
                </div>
                :
                <div>
                    listItem
                </div>
            }
        </div>
    )
};

export default ListItem;