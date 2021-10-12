import React, {useEffect} from "react";

import {DatesArray} from "../../helpers/interfaces";

import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

import CommentsContainer from "../../containers/CommentsContainer/CommentsContainer";

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
    fly: DatesArray;
    planes: { id: string; name: string; __typename?: any }[];
    save: () => void;
}

const ChangeFly: React.FC<IProps> = ({fly, planes, save}) => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState<Date | any>(new Date(+fly?.date));

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const [currency, setCurrency] = React.useState<string | null>(null);

    if (!currency && planes) {
        let i = planes.findIndex(n => n.name == fly.plane.name);
        setCurrency(planes[i].name)
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
                        id="c-date"
                        label="Выберите дату"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                    <TextField
                        id="c-time"
                        label="Выберите время"
                        type="time"
                        defaultValue={(new Date(+fly?.date)).toISOString().slice(11,16)}
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
                        id="c-duration"
                        label="Выберите длительность"
                        type="time"
                        defaultValue={`0${~~(fly.duration/60)}:${(fly.duration%60)}`}
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
                        id="c-plane"
                        select
                        label="Самолет"
                        value={currency ? currency : ""}
                        onChange={handleChange}
                        // helperText="Выберите самолет"
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
                <CommentsContainer comments={fly?.comments} flyId={fly?._id}/>
                <Grid item xs={12} className={classes.gridItem}>
                    <Button className={classes.btn} variant="contained" color={"primary"} onClick={save}>Сохранить изменения</Button>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    )
};

export default ChangeFly;