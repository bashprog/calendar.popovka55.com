import React from "react";

import Grid from '@material-ui/core/Grid';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

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

interface DatesArray {
    date: string,
    duration: number,
    author: { name: string },
}

const Schedule: React.FC<ScheduleProps> = ({array}) => {
    const classes = useStyles();

    console.log(array);

    return (
        <section>
            <div className={classes.tableBox}>
                <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.tableSector}>

                    </Grid>
                </Grid>
            </div>
        </section>
    )
};

export default Schedule;