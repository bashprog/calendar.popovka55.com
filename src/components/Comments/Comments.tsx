import React from "react";

import {IComments} from "../../helpers/interfaces";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridItem: {
            display: "flex",
            justifyContent: "center"
        },
        comment: {
            width: "95%",
            margin: "0 2.5%"
        },
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: "100%"
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

interface IProps {
    comments?: IComments[]
}

const Comments: React.FC<IProps> = ({comments}) => {
    const classes = useStyles();

    return(
        <>
            {comments && comments.map((val, key) => (
                <Grid key={val._id} item xs={12} className={classes.gridItem}>
                    <TextField variant="outlined" label="Комментарий" defaultValue={val.comment} className={classes.comment}/>
                </Grid>
            ))}
            <Grid item xs={12} className={classes.gridItem}>
                <Paper component="form" className={classes.root} variant={"outlined"}>
                    <InputBase
                        className={classes.input}
                        placeholder="Коментарий"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton className={classes.iconButton} aria-label="add">
                        <AddIcon />
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton className={classes.iconButton} aria-label="change">
                        <CreateIcon />
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton className={classes.iconButton} aria-label="directions">
                        <ClearIcon />
                    </IconButton>
                </Paper>
            </Grid>
        </>
    )
};

export default Comments;