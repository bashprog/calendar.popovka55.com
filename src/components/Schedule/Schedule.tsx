import React from "react";

import {IFormattingDates} from "../../helpers/interfaces";

import ListContainer from "../../containers/ListContainer/ListContainer";
import {useAtom} from "jotai";
import {tableViewAtom} from "../../atoms";
import CardContainer from "../../containers/CardContainer/CardContainer";

interface IProps {
    array?: IFormattingDates[];
    refetch: () => void
}

const Schedule: React.FC<IProps> = ({array, refetch}) => {
    const [tableView] = useAtom(tableViewAtom);

    return (
        <section>
            {tableView ? <ListContainer array={array} refetch={refetch}/> : <CardContainer array={array} refetch={refetch}/>}
        </section>
    )
};

export default Schedule;