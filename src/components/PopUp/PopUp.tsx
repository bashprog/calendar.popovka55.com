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

    let msg: string = '';

    switch (object.object) {
        case 'addfly':
            object.success ? msg = 'Полет добавлен успешно!' : msg = 'Ошибка при добавлении полета!';
            break;
        case 'changefly':
            object.success ? msg = 'Полет изменен успешно!' : msg = 'Ошибка при изменении полета!';
            break;
        case 'deletefly':
            object.success ? msg = 'Полет удален успешно!' : msg = 'Ошибка при удалении полета!';
            break;
        case 'adduser':
            object.success ? msg = 'Пользователь добавлен успешно!' : msg = 'Ошибка при добавлении пользователя!';
            break;
        case 'changeuser':
            object.success ? msg = 'Пользователь изменен успешно!' : msg = 'Ошибка при изменении пользователя!';
            break;
        case 'deleteuser':
            object.success ? msg = 'Пользователь удален успешно!' : msg = 'Ошибка при удалении пользователя!';
            break;
        case 'addcomment':
            object.success ? msg = 'Комментарий добавлен успешно!' : msg = 'Ошибка при добавлении комментария!';
            break;
        case 'changecomment':
            object.success ? msg = 'Комментарий изменен успешно!' : msg = 'Ошибка при изменении комментария!';
            break;
        case 'deletecomment':
            object.success ? msg = 'Комментарий удален успешно!' : msg = 'Ошибка при удалении комментария!';
            break;
    }

    return(
        <div className={clsx(classes.position, object.visible && classes.visible)}>
            <div className={clsx(classes.popUpContainer, object.success ? classes.successBg : classes.errorBg)}>
                {msg}
            </div>
        </div>
    )
};

export default PopUp;