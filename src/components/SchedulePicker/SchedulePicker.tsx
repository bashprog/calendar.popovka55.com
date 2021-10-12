import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MenuItem from "@material-ui/core/MenuItem";
import CommentsContainer from "../../containers/CommentsContainer/CommentsContainer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            margin: theme.spacing(2),
            width: 238,
        },
        flexCenter: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        container: {
            margin: "0 auto",
            maxWidth: "1200px",
            width: "100%",
            paddingTop: "40px",
        },
        gridItem: {
            display: "flex",
            justifyContent: "center"
        },
    }),
);

interface IProps {
    from: Date;
    to: Date;
    changeFrom: (date: Date | null) => void;
    changeTo: (date: Date | null) => void;
}

const SchedulePicker: React.FC<IProps> = ({from, to, changeFrom, changeTo}) => {
    const classes = useStyles();

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={6} className={classes.gridItem}>
                    <KeyboardDatePicker
                        disableToolbar={true}
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="c-date"
                        label="Выберите начальную дату"
                        value={from}
                        onChange={changeFrom}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.gridItem}>
                    <KeyboardDatePicker
                        disableToolbar={true}
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="c-date"
                        label="Выберите конечную дату"
                        value={to}
                        onChange={changeTo}
                    />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    )
};

export default SchedulePicker;