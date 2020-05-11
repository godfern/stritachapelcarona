
import React from "react";
import Grid from '@material-ui/core/Grid';

import { makeStyles } from "@material-ui/core/styles";

// core components
import Card from "components/Card/Card.js";
import GridItem from "components/Grid/GridItem.js";

import { timeConvert } from "./utils";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function MassList({ masses }) {
    const massList = masses && masses.map(massItem => {
        return (
            <>
                <GridItem xs={6} sm={3}>{timeConvert(massItem.time)}</GridItem>
                <GridItem xs={6} sm={9}>{massItem.name}</GridItem>
            </>
        )
    })

    return (
        <Grid item xs={12} sm={12} container direction="row">
            {massList}
        </Grid>
    )

}

function ChapelServicesGrid({ services }) {
    const classes = useStyles();

    function FormRow({ rowData }) {
        const { day, services: { masses = [] } } = rowData;

        return (
            <React.Fragment>
                <Grid item xs={12} sm={12} container direction="column">
                    <GridItem xs={12} sm={12}><h4>{day}</h4></GridItem>
                    <GridItem xs={12} sm={12}>
                        <MassList masses={masses} />
                    </GridItem>
                </Grid>
            </React.Fragment>
        );
    }

    const listItems = services.days && services.days.map((item) =>
        <Grid item xs={12} container>
            <FormRow rowData={item} />
        </Grid>
    );

    return (
        <div className={classes.root}>
            <Grid item xs={12} sm={12} container direction="row">
                <GridItem xs={12} sm={6}>{listItems}</GridItem>
                <GridItem xs={12} sm={6}>
                    <Card className={`${classes.card} card-wrapper`}>
                        <img className={classes.imgCard} src="https://dl.dropboxusercontent.com/s/pe2uuawtmm00xnd/chapel_inside1.jpg?dl=0" />
                    </Card>
                </GridItem>
            </Grid>
        </div>
    )
}

export default ChapelServicesGrid;