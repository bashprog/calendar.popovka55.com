import React, {useEffect, useState} from "react";

import Schedule from "../../components/Schedule/Schedule";

import {comparedAndFormattingDates} from "../../helpers/compareAndFormattingDate";

import {useQuery} from "react-apollo";
import {getFlysByDate} from "../../gql/queries/getFlysByDate";
import {getTodayISO} from "../../helpers/getTodayISO";
import Preloader from "../../components/Preloader/Preloader";
import SchedulePicker from "../../components/SchedulePicker/SchedulePicker";
import {getStartDateISO} from "../../helpers/getStartDateISO";

const ScheduleContainer = () => {
    useEffect(() => {
        diapason.refetch();
    });

    const [from, changeFrom] = useState<Date | any>(new Date());
    const [to, changeTo] = useState<Date | any>((new Date()).addWeek());

    const handleFromChange = (date: Date | null) => {
        changeFrom(date);
    };

    const handleToChange = (date: Date | null) => {
        changeTo(date);
    };

    if (from.getTime() > to.getTime())
        changeTo(from);

    const diapason = useQuery(getFlysByDate, {variables: {from: getStartDateISO(from), to: getStartDateISO(to)}});

    console.log(getStartDateISO(from), getStartDateISO(to));

    let list: any = comparedAndFormattingDates(diapason?.data?.getFlysByDate);

    const props = {
        from: from,
        to: to,
        changeFrom: handleFromChange,
        changeTo: handleToChange,
    };

    return (
        <>
            <SchedulePicker {... props}/>
            {diapason.loading ? <Preloader/> : <Schedule array={list} refetch={diapason.refetch}/>}
        </>
    )
};

export default ScheduleContainer;