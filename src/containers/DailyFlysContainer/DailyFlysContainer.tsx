import React, {useEffect} from 'react';

import {comparedAndFormattingDates} from "../../helpers/compareAndFormattingDate";

import {useQuery} from "react-apollo";
import {getDailyFlys} from "../../gql/queries/getDailyFlys";

import Preloader from "../../components/Preloader/Preloader";
import {getStartDateISO} from "../../helpers/getStartDateISO";

import {useAtom} from "jotai";
import {tableViewAtom} from "../../atoms";
import ListContainer from "../ListContainer/ListContainer";
import CardContainer from "../CardContainer/CardContainer";

interface IProps {
    date: any
}

const DailyFlysContainer: React.FC<IProps> = ({date}) => {
    const [tableView] = useAtom(tableViewAtom);

    useEffect(() => {
        dailyFlys.refetch();
    })

    const dailyFlys = useQuery(getDailyFlys, {variables: {date: getStartDateISO(date)}})

    let list: any = comparedAndFormattingDates(dailyFlys?.data?.getDailyFlys);

    return (
        <>
            {dailyFlys.loading ? <Preloader/> : <>
                {tableView ? <ListContainer refetch={dailyFlys.refetch} array={list}/> :
                    <CardContainer refetch={dailyFlys.refetch} array={list}/>}
            </>}
        </>
    )
};

export default DailyFlysContainer;