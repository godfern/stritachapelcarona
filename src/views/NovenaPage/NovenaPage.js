import React, { useState, useEffect } from "react";
import Moment from 'moment';
import { Link as RouterLink } from 'react-router-dom';

// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/icons

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import novena from "../../services/Novena";
import feast from "../../services/Feast";

import {
  cardTitle,
  cardLink,
  cardSubtitle,
  card
} from "assets/jss/material-kit-react.js";

import basicsStyle from "./styles";

const styles = {
  ...basicsStyle,
  cardTitle,
  cardLink,
  cardSubtitle,
  card
};

const useStyles = makeStyles(styles);

export default function NovenaPage() {
  const classes = useStyles();
  const [novenas, setNovenas] = useState([]);
  const [feasts, setFeasts] = useState([]);

  const fetchNovenas = async () => {
    let data = await novena.list();
    setNovenas(data);
  }

  const fetchFeasts = async () => {
    let data = await feast.list();
    setFeasts(data);
  }

  useEffect(() => {
    fetchNovenas();
    fetchFeasts();
  }, []);

  return (
    <div className={`${classes.sections} novena-listing-page-container`}>
      <div className={`${classes.container}`}>
      <GridContainer className={classes.sectionHeader}
          direction="column"
          justify="center"
          alignItems="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>St. Rita de Cascia Novena and Feast</h2>
            <h4>Prayers during the Novenas starting from 12th May to 22nd May</h4>
            <h5>You can pray the full St Rita of Cascia Novena below</h5>
          </GridItem>
      </GridContainer>

        <Grid container spacing={2} className="novenas-list">
          <Grid item xs={12} md={8}>
            {novenas.map(novena => {
              return (
                <Card key={novena.id} className={`${classes.card} card-container`}>
                  {novena.image_url &&
                    <CardMedia
                      className="image"
                      image={novena.image_url} />
                  }
                  <div className="card-details">
                    <CardContent>
                      <div className="day-date-wrapper">
                        <span>Day {novena.day_no}</span>
                        <span>{Moment(novena.date).format('LL')}</span>
                      </div>
                      <h4 className={classes.cardTitle}>{novena.title}</h4>
                      <p className="message">{novena.message}</p>
                      <div dangerouslySetInnerHTML={{ __html: novena.description }} />
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </div>

      <div className={`${classes.container}`}>
        <Grid container spacing={2} className="feasts-list">
          <Grid item xs={12} md={8}>
            <Typography variant="h6" className={classes.title}>
              Feasts
            </Typography>
            {feasts.map(novena => {
              return (
                <Card key={novena.id} className={`${classes.card} card-container`}>
                  {novena.image_url &&
                    <CardMedia
                      className="image"
                      image={novena.image_url} />
                  }
                  <div className="card-details">
                    <CardContent>
                      <div className="day-date-wrapper">
                        <span>Day {novena.day_no}</span>
                        <span>{Moment(novena.date).format('LL')}</span>
                      </div>
                      <h4 className={classes.cardTitle}>{novena.title}</h4>
                      <p className="message">“{novena.message}”</p>
                      <p>{novena.description}</p>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </div>


  );
}
