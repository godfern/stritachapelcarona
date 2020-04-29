import React, { useState, useEffect } from "react";
import Moment from 'moment';
import { Link as RouterLink } from 'react-router-dom';

// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

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
        <Grid container spacing={2} className="novenas-list">
          <Grid item xs={12} md={8}>
            <Typography variant="h6" className={classes.title}>
              Novenas
            </Typography>
            {novenas.map(novena => {
              return (
                <Card key={novena.id} className={`${classes.card} card-container`}>
                  {novena.image_url &&
                    <CardMedia
                      className="image"
                      image={novena.image_url}
                      title="Paella dish"
                    />
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
