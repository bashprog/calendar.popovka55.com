import React, {useEffect} from "react";

import Schedule from "../../components/Schedule/Schedule";

import {comparedAndFormattingDates} from "../../helpers/compareAndFormattingDate";

import {useQuery} from "react-apollo";
import {getDailyFlys} from "../../gql/queries/getDailyFlys";
import {getTodayISO} from "../../helpers/getTodayISO";

const ScheduleContainer = () => {
    const daily = useQuery(getDailyFlys, {variables: {date: getTodayISO()}});

    console.log(daily?.data?.getDailyFlys);

    let list = undefined;

    if (daily?.data?.getDailyFlys)
        list = comparedAndFormattingDates(daily?.data?.getDailyFlys);

    return (
        <>
            <Schedule array={list}/>
        </>
    )
};

export default ScheduleContainer;