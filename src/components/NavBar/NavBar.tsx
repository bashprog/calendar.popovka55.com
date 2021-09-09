import React from "react";

import { Link } from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    list: {
        width: "100%",
        maxWidth: 300
    },
    fullList: {
        width: 'auto',
    },
    btn: {
        position: "absolute",
        right: 12,
        top: 12,
        zIndex: 100
    },
    listItem: {
        // padding: "5px 20px"
    },
    icon: {
        display: "flex",
        justifyContent: "center",
        "@media (max-width: 680px)": {
            "& svg" :{
                fontSize: "2.1rem"
            }
        }
    },
    listText: {
        "@media (max-width: 680px)": {
            display: "none"
        }
    }
});

const NavBar = () => {
    const classes = useStyles();

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState(open);
    };

    return (
        <div>
            <React.Fragment>
                <Button className={classes.btn} variant="contained" onClick={toggleDrawer(true)}><MenuIcon/></Button>
                <SwipeableDrawer
                    anchor={"right"}
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    onClick={toggleDrawer(false)}
                >
                    <List component="nav" aria-labelledby="nested-list-subheader" className={classes.list}>
                        <Link to={"/"}>
                            <ListItem button className={classes.listItem}>
                                <ListItemIcon className={classes.icon}>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText className={classes.listText} primary="Домой"/>
                            </ListItem>
                        </Link>
                        <Link to={"/schedule"}>
                            <ListItem button className={classes.listItem}>
                                <ListItemIcon className={classes.icon}>
                                    <EventNoteIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.listText} primary="Расписание" />
                            </ListItem>
                        </Link>
                        <Link to={"/add"}>
                            <ListItem button className={classes.listItem}>
                                <ListItemIcon className={classes.icon}>
                                    <AddBoxIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.listText} primary="Добавить полет" />
                            </ListItem>
                        </Link>
                        <Link to={"/settings"}>
                            <ListItem button className={classes.listItem}>
                                <ListItemIcon className={classes.icon}>
                                    <SettingsApplicationsIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.listText} primary="Настройки" />
                            </ListItem>
                        </Link>
                        <Link to={"/logout"}>
                            <ListItem button className={classes.listItem}>
                                <ListItemIcon className={classes.icon}>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.listText} primary="Выход" />
                            </ListItem>
                        </Link>
                    </List>
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    )
};

export default NavBar;