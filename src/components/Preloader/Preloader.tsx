import React from "react";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            position: "fixed",
            background: "white",
            top: 0,
            zIndex: 10000
        },
    }),
);

const Preloader = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <CircularProgress/>
        </section>
    )
};

export default Preloader;