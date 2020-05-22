import React, { useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";
import { List, ListItem } from "@material-ui/core";

import "assets/js/libs/jquery.min.js";
import "assets/js/libs/jquery.als-1.7.min.js";

// core components
import Card from "components/Card/Card.js";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import {
  card
} from "assets/jss/material-kit-react.js";

import basicsStyle from "./styles";

const styles = {
  ...basicsStyle,
  card
};

const useStyles = makeStyles(styles);

export default function OurChapelPage() {
  const classes = useStyles();
  return (
    <div className={`${classes.sections} news-updates-page-container`}>
      <div className={`${classes.container}`}>

      <GridContainer className={classes.sectionHeader}
          direction="column"
          justify="center"
          alignItems="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2> Our Chapel</h2>
          </GridItem>
      </GridContainer>

        <Grid container spacing={2} className="feasts-list">
          <Grid item xs={12} md={12}>
                  <Card className={classes.video}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/2ACVScPqhPg" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                      
                  </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
