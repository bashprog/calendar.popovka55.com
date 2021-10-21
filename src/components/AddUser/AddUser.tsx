import React, {useState} from "react";

import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {TextField} from "@material-ui/core";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
            paddingTop: "60px"
        },
        gridItem: {
            display: "flex",
            justifyContent: "center"
        },
        btn: {
            margin: 20
        },
        header: {
            margin: "0 auto",
            fontWeight: 400,
        }
    }),
);

interface IProps {
    save: () => void;
}


const AddUser: React.FC<IProps> = ({save}) => {
    const classes = useStyles();

    const [showPassword, toggleShowPassword] = useState(false);

    return (
        <Grid container className={classes.container}>
            <h2 className={classes.header}>Настройки аккаунта</h2>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                    <TextField id="new-name" label="Имя" variant="outlined"
                               className={classes.textField} autoComplete={"off"}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                    <TextField id="new-email" label="E-mail" variant="outlined"
                               className={classes.textField} autoComplete={"off"}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItem} >
                    <FormControl className={classes.textField} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                        <OutlinedInput
                            id="new-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => toggleShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Button variant="contained" color="primary" onClick={save}>
                        Добавить пользователя
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default AddUser;