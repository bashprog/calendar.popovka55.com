import React from "react";

import {DatesArray} from "../../helpers/interfaces";

import {compareArray} from "./compareArray";
import {formattingArray} from "./formattingArray";

import ListItem from "../../components/ListItem/ListItem";

import Grid from '@material-ui/core/Grid';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

interface ListContainerProps {
    array?: DatesArray[];
}

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

const ListContainer: React.FC<ListContainerProps> = ({array}) => {
    const classes = useStyles();

    let temp = compareArray(array);
    let list: any = formattingArray(temp);

    return (
        <Grid container className={classes.tableBox}>
            {list && list.map((val: any, key: any) => (
                <React.Fragment key={key}>
                    <ListItem day={val.day} />
                    {val.array && val.array.map((value: any) => <ListItem item={value} key={value.id} />)}
                </React.Fragment>
            ))}
        </Grid>
    )
};

export default ListContainer;