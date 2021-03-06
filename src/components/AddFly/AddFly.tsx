import React, {useState} from "react";

import "date-fns"

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
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
            paddingTop: "40px"
        },
        gridItem: {
            display: "flex",
            justifyContent: "center"
        },
        btn: {
            margin: 20
        },
        comment: {
            width: "95%",
            margin: "0 2.5%"
        },
    }),
);

interface IProps {
    planes?: { id: string; name: string; __typename?: any }[];
    add: () => void;
    changeDate: (date: Date | any) => void;
    date: Date | null;
}


const AddFly: React.FC<IProps> = ({planes, add, changeDate, date}) => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const [currency, setCurrency] = React.useState<string | null>(null);

    if (!currency && planes) {
        setCurrency(planes[0].name)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                    <KeyboardDatePicker
                        disableToolbar={true}
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date"
                        label="???????????????? ????????"
                        value={date}
                        onChange={changeDate}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                    <TextField
                        id="time"
                        label="???????????????? ??????????"
                        type="time"
                        defaultValue="07:30"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                    <TextField
                        id="duration"
                        label="???????????????? ????????????????????????"
                        type="time"
                        defaultValue="00:30"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                    <TextField
                        id="plane"
                        select
                        label="??????????????"
                        value={currency ? currency : ""}
                        onChange={handleChange}
                        // helperText="???????????????? ??????????????"
                        variant="outlined"
                        className={classes.textField}
                    >
                        {planes ? planes.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                                {option.name}
                            </MenuItem>
                        )) : <MenuItem>
                            {""}
                        </MenuItem>}
                    </TextField>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <TextField id={"comment"} variant="outlined" label="??????????????????????" defaultValue={""}
                               className={classes.comment}/>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Button className={classes.btn} variant="contained" color={"primary"} onClick={add}>????????????????
                        ??????????</Button>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    )
};

export default AddFly;