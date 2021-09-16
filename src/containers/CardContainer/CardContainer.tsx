import React from "react";

import {DatesArray} from "../../helpers/interfaces";

import Grid from '@material-ui/core/Grid';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

interface ICardContainer {
    array?: DatesArray[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tableBox: {
            maxWidth: "1200px",
            width: "100%",
            margin: "50px auto 0",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            flexDirection: "column",
            overflow: "hidden",
        },
    })
);

const CardContainer: React.FC<ICardContainer> = ({array}) => {
    return (
        <section>
            <Grid container >
                
            </Grid>
        </section>
    )
};

export default CardContainer;