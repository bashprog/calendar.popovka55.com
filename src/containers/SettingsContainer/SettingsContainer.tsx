import React from "react";

import AccountInfoContainer from "../AccountInfoContainer/AccountInfoContainer";
import PlanesSettingsContainer from "../PlanesSettingsContainer/PlanesSettingsContainer";
import UserSettingsContainer from "../UserSettingsContainer/UserSettingsContainer";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: "0 auto",
            maxWidth: "1200px",
            width: "100%",
            paddingTop: "40px"
        },
        gridItem: {
            display: "flex",
            justifyContent: "center"
        },
        column: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    }),
);

const SettingsContainer: React.FC = () => {
    const [auth] = useAtom(authAtom);

    const classes = useStyles();

    return (
        <>
            <AccountInfoContainer/>
            {auth.role == 'admin' && <Grid container className={classes.container}>
                <Grid item xs={12} sm={6} className={classes.gridItem}>
                    <PlanesSettingsContainer/>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.column}>
                    <UserSettingsContainer/>
                </Grid>
            </Grid>}
        </>
    )
};

export default SettingsContainer;