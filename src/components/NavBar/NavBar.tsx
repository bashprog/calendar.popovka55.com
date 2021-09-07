import React from "react";

import {makeStyles} from '@material-ui/core/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    btn: {
        position: "absolute",
        right: 20,
        top: 20,
        zIndex: 100
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
                <Button className={classes.btn} variant="contained" onClick={toggleDrawer(true)}><MenuIcon /></Button>
                <SwipeableDrawer
                    anchor={"right"}
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <p className={classes.list}>123123</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    )
};

export default NavBar;