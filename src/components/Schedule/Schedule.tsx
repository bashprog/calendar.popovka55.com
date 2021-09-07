import React from "react";

import {DatesArray} from "../../helpers/interfaces";

import ListContainer from "../../containers/ListContainer/ListContainer";

interface ScheduleProps {
    array?: DatesArray[]
}

const Schedule: React.FC<ScheduleProps> = ({array}) => {
    return (
        <section>
            <ListContainer array={array} />
        </section>
    )
};

export default Schedule;