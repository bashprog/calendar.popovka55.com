import React, {useEffect} from "react";

import Schedule from "../../components/Schedule/Schedule";

import {comparedAndFormattingDates} from "../../helpers/compareAndFormattingDate";

import {useQuery} from "react-apollo";
import {getDailyFlys} from "../../gql/queries/getDailyFlys";
import {getWeeklyFlys} from "../../gql/queries/getWeeklyFlys";
import {getTodayISO} from "../../helpers/getTodayISO";
import Preloader from "../../components/Preloader/Preloader";

const ScheduleContainer = () => {
    const daily = useQuery(getWeeklyFlys, {variables: {date: getTodayISO()}});

    useEffect(() => {
       daily.refetch();
    });

    let list: any = comparedAndFormattingDates(daily?.data?.getWeeklyFlys);

    return (
        <>
            {daily.loading ? <Preloader/> : <Schedule array={list} refetch={daily.refetch}/>}
        </>
    )
};

export default ScheduleContainer;