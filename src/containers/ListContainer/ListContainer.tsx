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
        header: {
            fontWeight: 400,
            display: "flex",
            justifyContent: "center"
        }
    })
);

interface IProps {
    array?: IFormattingDates[];
    refetch: () => void
}

const ListContainer: React.FC<IProps> = ({array, refetch}) => {
    const classes = useStyles();

    return (
        <>
            {array?.length ? <Grid container className={classes.tableBox}>
                {array && array.map((val: any, key: any) => (
                    <React.Fragment key={key}>
                        <ListItem day={val.day} />
                        {val.array && val.array.map((value: any) => <ListItem item={value} key={value._id} refetch={refetch}/>)}
                    </React.Fragment>
                ))}
            </Grid> : <h3 className={classes.header}>Полетов нет</h3>}
            </>
    )
};

export default ListContainer;