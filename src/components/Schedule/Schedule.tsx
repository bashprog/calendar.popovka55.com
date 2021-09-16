import React from "react";

import {IFormattingDates} from "../../helpers/interfaces";

import ListContainer from "../../containers/ListContainer/ListContainer";

interface IProps {
    array: IFormattingDates[] | undefined
}

const Schedule: React.FC<IProps> = ({array}) => {
    return (
        <section>
            <ListContainer array={array} />
        </section>
    )
};

export default Schedule;