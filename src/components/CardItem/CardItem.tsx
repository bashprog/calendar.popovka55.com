import React from "react";
import {DatesArray} from "../../helpers/interfaces";

import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';

import {Link, useHistory} from "react-router-dom";
import {useMutation} from "react-apollo";
import {deleteFly} from "../../gql/mutations/deleteFly";
import Preloader from "../Preloader/Preloader";

interface IProps {
    day?: string;
    item?: DatesArray;
    refetch?: () => void
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
    container: {
        position: "relative",
    },
    controlBox: {
        position: "absolute",
        right: 35,
        top: 35,
        "& svg": {
            color: "rgba(0, 0, 0, 0.54)",
            cursor: "pointer",
            transition: ".3s ",
            "&:hover": {
                color: "black"
            }
        }
    }
}));

const CardItem: React.FC<IProps> = ({day, item, refetch}) => {
    const classes = useStyles();

    const history = useHistory();

    const changeFlyLink = (): void => {
        if (item)
            history.push(`/changefly/${item._id}`)
    };

    const [deleteFlyById, deleteInfo] = useMutation(deleteFly);

    return (
        <>
            {deleteInfo.loading ? <Preloader/> :
                <>
                    {day ?
                        <div className={classes.day}>
                            <h3>{day}</h3>
                        </div>
                        :
                        <Grid item xs={10} sm={6} md={4} lg={3} className={classes.container}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography gutterBottom>
                                        {item?.date.slice(11, 16)}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        {item?.duration} минут
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {item?.plane.name}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {item?.author?.name}
                                    </Typography>
                                    <div className={classes.controlBox}>
                                        <CreateIcon onClick={changeFlyLink}/>
                                        <ClearIcon
                                            onClick={() => deleteFlyById({variables: {fly_id: item?._id}}).then(refetch)}/>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    }
                </>
            }
        </>
    )
};

export default CardItem;