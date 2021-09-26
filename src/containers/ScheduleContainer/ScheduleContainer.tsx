import React, {useEffect} from "react";

import Schedule from "../../components/Schedule/Schedule";

import {comparedAndFormattingDates} from "../../helpers/compareAndFormattingDate";

import {useQuery} from "react-apollo";
import {getDailyFlys} from "../../gql/queries/getDailyFlys";
import {getWeeklyFlys} from "../../gql/queries/getWeeklyFlys";
import {getTodayISO} from "../../helpers/getTodayISO";

const ScheduleContainer = () => {
    const daily = useQuery(getWeeklyFlys, {variables: {date: getTodayISO()}});

    let list: any = comparedAndFormattingDates(daily?.data?.getWeeklyFlys);

    return (
        <>
            <Schedule array={list}/>
        </>
    )
};

export default ScheduleContainer;