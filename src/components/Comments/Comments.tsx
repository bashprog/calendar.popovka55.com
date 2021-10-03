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
            justifyContent: "center",
            margin: "20px 0"
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
        active: {
            color: "black"
        }
    }),
);

interface IProps {
    comments?: IComments[];
    addComment: (newComment: any) => void;
    deleteComment: (id: string) => void;
}

const Comments: React.FC<IProps> = ({comments, addComment, deleteComment}) => {
    const classes = useStyles();

    console.log(comments);

    const add = () => {
        let item = document.getElementById('new-comment') as HTMLInputElement;

        if (item.value) {
            addComment(item);
            item.value = "";
        }
    };

    return(
        <>
            {comments && comments.map((val, key) => (
                <Grid item xs={12} key={key} className={classes.gridItem}>
                    <Paper className={classes.root} variant={"outlined"}>
                        <InputBase
                            id={""}
                            className={classes.input}
                            placeholder="Добавить коментарий"
                            inputProps={{ 'aria-label': 'comment' }}
                            value={val.comment}
                        />
                        <IconButton className={classes.iconButton} onClick={() => deleteComment(val._id)} aria-label="directions">
                            <ClearIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            ))}
            <Grid item xs={12} className={classes.gridItem}>
                <Paper component="form" className={classes.root} variant={"outlined"}>
                    <InputBase
                        id={"new-comment"}
                        className={classes.input}
                        placeholder="Добавить коментарий"
                        inputProps={{ 'aria-label': 'comment' }}
                    />
                    <IconButton className={classes.iconButton} onClick={() => {add()}} aria-label="add">
                        <AddIcon className={classes.active}/>
                    </IconButton>
                </Paper>
            </Grid>
        </>
    )
};

export default Comments;