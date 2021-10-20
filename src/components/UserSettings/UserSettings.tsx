import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 300,
        margin: 8,
        position: "relative"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    header: {
        margin: "0 auto",
        fontWeight: 400
    },
    clear: {
        position: "absolute",
        top: 16,
        right: 16,
        cursor: "pointer"
    }
});

interface IProps {
    users?: {_id: string, name: string, email: string}[];
    deleteUser: (id: string) => void;
}

const UserSettings: React.FC<IProps> = ({users, deleteUser}) => {
    const classes = useStyles();

    return(
        <>
            <h2 className={classes.header}>Список пользователей</h2>
            {users && users.map((el, key) => (
                <Card className={classes.root} key={el._id}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {el._id}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {el.name}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {el.email}
                        </Typography>
                    </CardContent>
                    <ClearIcon className={classes.clear} onClick={() => {deleteUser(el._id)}}/>
                </Card>
            ))}
            </>
    )
};

export default UserSettings;