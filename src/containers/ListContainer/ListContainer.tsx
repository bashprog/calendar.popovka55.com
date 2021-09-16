import React from "react";

import {IFormattingDates} from "../../helpers/interfaces";

import ListItem from "../../components/ListItem/ListItem";

import Grid from '@material-ui/core/Grid';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tableBox: {
            maxWidth: "1200px",
            width: "100%",
            margin: "50px auto 0",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            flexDirection: "column",
            overflow: "hidden",
        },
    })
);

interface IProps {
    array: IFormattingDates[] | undefined
}

const ListContainer: React.FC<IProps> = ({array}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.tableBox}>
            {array && array.map((val: any, key: any) => (
                <React.Fragment key={key}>
                    <ListItem day={val.day} />
                    {val.array && val.array.map((value: any) => <ListItem item={value} key={value.id} />)}
                </React.Fragment>
            ))}
        </Grid>
    )
};

export default ListContainer;