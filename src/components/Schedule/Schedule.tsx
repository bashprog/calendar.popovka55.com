import React from "react";

import {IFormattingDates} from "../../helpers/interfaces";

import ListContainer from "../../containers/ListContainer/ListContainer";
import {useAtom} from "jotai";
import {tableViewAtom} from "../../atoms";
import CardContainer from "../../containers/CardContainer/CardContainer";

interface IProps {
    array: IFormattingDates[] | undefined
}

const Schedule: React.FC<IProps> = ({array}) => {
    const [tableView, toggle] = useAtom(tableViewAtom);
    
    return (
        <section>
            {tableView ? <ListContainer array={array} /> : <CardContainer array={array}/>}
        </section>
    )
};

export default Schedule;