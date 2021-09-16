import React from "react";
import {DatesArray} from "../../helpers/interfaces";

import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';

interface IProps {
    day?: string;
    item?: DatesArray;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    day: {
        width: "100%",
        margin: "0 auto",
        "& h3": {
            fontWeight: 400,
            padding: 20,
            borderBottom: "1px solid black"
        }
    },
    card: {
        margin: 20
    },
}));

const CardItem: React.FC<IProps> = ({day, item}) => {
    const classes = useStyles();

    return (
        <>
            {day ?
                <div className={classes.day}>
                    <h3>{day}</h3>
                </div>
                :
                <Grid item xs={10} sm={6} md={4} lg={3} >
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom>
                                {item?.date.slice(11,16)}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {item?.duration} минут
                            </Typography>
                            <Typography variant="body2" component="p">
                                {item?.author?.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            }
        </>
    )
};

export default CardItem;