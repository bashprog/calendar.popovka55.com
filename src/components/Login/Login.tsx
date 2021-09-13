import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "inline-flex",
            flexDirection:"column",
            alignItems: "center",
            border: "1px solid gray",
            borderRadius: "10px",
            padding: theme.spacing(2),
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "600px",
            minHeight: "100px",
            margin: 20,
            borderRadius: 15,
            padding: 20,
            border: "1px solid rgba(0, 0, 0, 0.2)"
        },
        gridItem: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        section: {
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    }),
);

interface loginProps {
    login: () => void;
    error: boolean | undefined;
}

const Login: React.FC<loginProps> = ({login, error}) => {
    const classes = useStyles();

    return (
        <section className={classes.section}>
            <form autoComplete={'off'} className={classes.container}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                        <TextField
                            required
                            id="login"
                            label="E-mail"
                            autoComplete={'off'}
                            variant="outlined"
                            error={error}
                            onKeyDown={(e) => (e.key == "Enter") && (document.getElementById("submit") as HTMLFormElement).click()}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                        <TextField
                            required
                            id="password"
                            label="Пароль"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            error={error}
                            onKeyDown={(e) => (e.key == "Enter") && (document.getElementById("submit") as HTMLFormElement).click()}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} className={classes.gridItem}>
                        <Button variant="outlined" id={"submit"} color={"primary"} disableElevation onClick={login} style={{"margin":"8px"}}>
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </section>
    )
};

export default Login;