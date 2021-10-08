import React from "react";

import ClearIcon from '@material-ui/icons/Clear';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import AddIcon from '@material-ui/icons/Add';

interface IProps {
    planes?: { _id: string; name: string }[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            margin: 10
        },
        color: {
            "& input": {
                color: "black",
                marginLeft: 10
            }
        },
        header: {
            margin: "0 auto",
            fontWeight: 400
        },
        column: {
            display: "flex",
            flexDirection: "column"
        }
    }),
);


const PlanesSettings: React.FC<IProps> = ({planes}) => {
    const classes = useStyles();

    return (
        <div className={classes.column}>
            <h2 className={classes.header}>Список самолетов</h2>
            {planes && planes.map((el) => (
                <Paper className={classes.container} variant={"outlined"} key={el._id}>
                    <InputBase
                        className={classes.color}
                        value={el.name}
                        disabled
                    />
                    <IconButton aria-label="clear">
                        <ClearIcon/>
                    </IconButton>
                </Paper>
            ))}
            <Paper className={classes.container} variant={"outlined"}>
                <InputBase
                    className={classes.color}
                    defaultValue={""}
                    placeholder={"Добавить самолет"}
                />
                <IconButton aria-label="add">
                    <AddIcon/>
                </IconButton>
            </Paper>
        </div>
    )
};

export default PlanesSettings;