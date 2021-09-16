import React from "react";

import {DatesArray} from "../../helpers/interfaces";

import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';

interface ListItemsProps {
    day?: string;
    item?: DatesArray;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tableRow: {
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            display: "flex"
        },
        dateBox: {
            padding: 5,
            background: "rgba(0, 0, 0, 0.05)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
        },
        tableSector: {
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
        },
        rowCell: {
            borderRight: "1px solid rgba(0, 0, 0, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
        },
        lastCell: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            color: "rgba(0, 0, 0, 0.54)",
            "& svg": {
                padding: 5,
                cursor: "pointer",
                transition: ".3s ",
                "&:hover": {
                    color: "black"
                },
            }
        }
    }));

const ListItem: React.FC<ListItemsProps> = ({day, item}) => {
    const classes = useStyles();

    const getDiapason = (item: DatesArray) => {
        if (!item)
            return null;

        let firstTime: string = item.date.slice(11,16);
        let lastTime: string = ((new Date(item.date).addMinutes(item.duration)).toISOString()).slice(11, 16);

        return `${firstTime}-${lastTime}`
    };

    const setChars = (text: string) => {
        let chars: number;

        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        chars = 80;

        if (width < 800)
            chars = 30;

        if (width < 500)
            chars = 15;

        return text.slice(0, chars) + (text.length > chars ? "..." : "");
    };

    return(
        <>
            {day ?
                <Grid item xs={12} className={classes.dateBox}>
                    {day}
                </Grid>
                :
                <Grid item xs={12} className={classes.tableRow}>
                    <Grid item xs={3} md={2} className={classes.rowCell}>
                        {item && getDiapason(item)}
                    </Grid>
                    <Grid item xs={3} md={2} className={classes.rowCell}>
                        {item?.author?.name}
                    </Grid>
                    <Grid item xs className={classes.rowCell}>
                        {setChars("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, deserunt!")}
                    </Grid>
                    <Grid item xs={2} md={1} className={classes.lastCell}>
                        <CreateIcon />
                        <ClearIcon />
                    </Grid>
                </Grid>
            }
        </>
    )
};

export default ListItem;