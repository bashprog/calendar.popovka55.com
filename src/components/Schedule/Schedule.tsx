import React from "react";

import {DatesArray} from "../../helpers/interfaces";

import Grid from '@material-ui/core/Grid';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ListContainer from "../../containers/ListContainer/ListContainer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tableBox: {
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            border: "1px solid black",
            borderRadius: "8px",
            padding: "15px 0",
        },
        tableRow: {
            borderBottom: "1px solid black"
        },
        dateBox: {

        },
        tableSector: {
            borderBottom: "1px solid black"
        }
}));

interface ScheduleProps {
    array?: DatesArray[]
}

const Schedule: React.FC<ScheduleProps> = ({array}) => {
    const classes = useStyles();

    return (
        <section>
            <ListContainer array={array} />
        </section>
    )
};

export default Schedule;