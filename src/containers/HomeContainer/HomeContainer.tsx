import React, {useEffect} from "react";

import Schedule from "../../components/Schedule/Schedule";

import {comparedAndFormattingDates} from "../../helpers/compareAndFormattingDate";

import {useQuery} from "react-apollo";
import {getWeeklyFlys} from "../../gql/queries/getWeeklyFlys";
import {getTodayISO} from "../../helpers/getTodayISO";
import Preloader from "../../components/Preloader/Preloader";

const HomeContainer = () => {
    const weekly = useQuery(getWeeklyFlys, {variables: {date: getTodayISO()}});

    useEffect(() => {
        weekly.refetch();
    });

    let list: any = comparedAndFormattingDates(weekly?.data?.getWeeklyFlys);

    return (
        <>
            {weekly.loading ? <Preloader/> : <Schedule array={list} refetch={weekly.refetch}/>}
        </>
    )
};

export default HomeContainer;