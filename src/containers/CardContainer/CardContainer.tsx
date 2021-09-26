import React from "react";

import {IFormattingDates} from "../../helpers/interfaces";

import Grid from '@material-ui/core/Grid';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

import CardItem from "../../components/CardItem/CardItem";

interface IProps {
    array: IFormattingDates[] | undefined
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardContainer: {
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            "@media (max-width: 600px)": {
                justifyContent: "center"
            }
        },
        header: {
            fontWeight: 400,
            display: "flex",
            justifyContent: "center"
        }
    })
);

const CardContainer: React.FC<IProps> = ({array}) => {
    const classes = useStyles();

    return (
        <section>
            {array?.length ? <Grid container className={classes.cardContainer}>
                {array && array.map((val: any, key: any) => (
                    <React.Fragment key={key}>
                        <CardItem day={val.day} />
                        {val.array && val.array.map((value: any) => <CardItem item={value} key={value._id} />)}
                    </React.Fragment>
                ))}
            </Grid> : <h3 className={classes.header}>Полетов нет</h3>}
        </section>
    )
};

export default CardContainer;