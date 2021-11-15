import React, {useEffect} from "react";

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        flexCenter: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        position: {
            position: "fixed",
            right: 24,
            bottom: -120,
            opacity: 0,
            transition: ".3s"
        },
        popUpContainer: {
            borderRadius: 8,
            padding: 16,
        },
        successBg: {
            background: "rgba(30, 255, 0, 0.4)"
        },
        errorBg: {
            background: "rgba(255, 0, 0, 0.4)"
        },
        visible: {
            opacity: 1,
            bottom: 24,
        }
    }),
);

interface IProps {
    object: {visible: boolean, success: boolean, object: string}
}

const PopUp: React.FC<IProps> = ({object}) => {
    const classes = useStyles();

    return(
        <div className={clsx(classes.position, object.visible && classes.visible)}>
            <div className={clsx(classes.popUpContainer, object.success ? classes.successBg : classes.errorBg)}>
                123
            </div>
        </div>
    )
};

export default PopUp;