import React from "react";

import {DatesArray} from "../../helpers/interfaces";

import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import {useHistory} from "react-router-dom";

import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';

import {useMutation} from "react-apollo";
import {deleteFly} from "../../gql/mutations/deleteFly";

interface ListItemsProps {
    day?: string;
    item?: DatesArray;
    refetch?: () => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tableRow: {
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            display: "flex"
        },
        dateBox: {
            padding: 5,
            background: "rgba(0, 0, 0, 0.05)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
        },
        tableSector: {
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
        },
        rowCell: {
            borderRight: "1px solid rgba(0, 0, 0, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
        },
        lastCell: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            color: "rgba(0, 0, 0, 0.54)",
            "& svg": {
                padding: 5,
                cursor: "pointer",
                transition: ".3s ",
                "&:hover": {
                    color: "black"
                },
            }
        },
        gray: {
            color: "rgba(0, 0, 0, 0.54)"
        }
    }));

const ListItem: React.FC<ListItemsProps> = ({day, item, refetch}) => {
    const classes = useStyles();

    const getDiapason = (item: DatesArray) => {
        if (!item)
            return null;

        let firstTime: string = item.date.slice(11,16);
        let lastTime: string = ((new Date(item.date).addMinutes(item.duration)).toISOString()).slice(11, 16);

        return `${firstTime}-${lastTime}`
    };

    const setChars = (text: string) => {
        let chars: number;

        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        chars = 80;

        if (width < 800)
            chars = 30;

        if (width < 500)
            chars = 15;

        return text.slice(0, chars) + (text.length > chars ? "..." : "");
    };

    const history = useHistory();

    const changeFlyLink = (): void => {
        if (item)
            history.push(`/changefly/${item._id}`)
    };

    const [deleteFlyById, deleteInfo] = useMutation(deleteFly);

    return(
        <>
            {day ?
                <Grid item xs={12} className={classes.dateBox}>
                    {day}
                </Grid>
                :
                <Grid item xs={12} className={classes.tableRow}>
                    <Grid item xs={3} md={2} className={classes.rowCell}>
                        {item && getDiapason(item)}
                    </Grid>
                    <Grid item xs={2} md={2} className={classes.rowCell}>
                        {item?.author?.name}
                    </Grid>
                    <Grid item xs={2} md={1} className={classes.rowCell}>
                        {item?.plane?.name}
                    </Grid>
                    <Grid item xs className={classes.rowCell}>
                        {item?.comments?.length ? item?.comments?.map((el) => (
                            <span key={el._id}> {setChars(`${el.comment}`)} /   </span>
                        )) : <span className={classes.gray}>Нет комментариев</span>}
                    </Grid>
                    <Grid item xs={2} md={1} className={classes.lastCell}>
                        <CreateIcon onClick={changeFlyLink}/>
                        <ClearIcon onClick={() => deleteFlyById({variables: {fly_id: item?._id}}).then(refetch)}/>
                    </Grid>
                </Grid>
            }
        </>
    )
};

export default ListItem;