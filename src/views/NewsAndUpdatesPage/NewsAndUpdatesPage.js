import React, { useState, useEffect } from "react";
import Moment from 'moment';
import { Link as RouterLink } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "assets/js/libs/jquery.min.js";
import "assets/js/libs/jquery.als-1.7.min.js";

// core components
import Card from "components/Card/Card.js";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import newsUpdate from "../../services/NewsUpdate";

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

export default function NewsAndUpdatesPage() {
  const classes = useStyles();
  const [generalUpdates, setGeneralUpdates] = useState([]);
  const [archdiocesanNews, setArchdiocesanNews] = useState([]);
  const [vaticanNews, setVaticanNews] = useState([]);


  const fetchNewsAndUpdates = async () => {
    let data = await newsUpdate.get();
    setGeneralUpdates(data['general_updates']);
    setArchdiocesanNews(data['archdiocesan_news']);
    setVaticanNews(data['vatican_news']);
  }

  const initializeNewsScroller = (el) => {
    if (!$(el).attr('data-id')) {
      $(el).als({
        visible_items: 3,
        scrolling_items: 1,
        orientation: "vertical",
        circular: "yes",
        autoscroll: "yes",
        start_from: 0
      }); 
    }
  }

  useEffect(() => {
    fetchNewsAndUpdates();    
  }, []);

  return (
    <div className={`${classes.sections} news-updates-page-container`}>
      <div className={`${classes.container}`}>
        <Grid container spacing={2} className="feasts-list">
          <Typography variant="h5" className={classes.title}>
            Updates
          </Typography>

          <Grid item xs={12} md={12}>
            {generalUpdates.map((obj, index) => {
              return (
                <div key={index}>
                  <Typography variant="h6" className={classes.title}>
                    {obj.title}
                  </Typography>
                  <Card className={`${classes.card} card-container`}>
                    {obj.youtube_url &&
                      <CardMedia
                        className="video"
                        component="iframe"
                        src={obj.youtube_url} />
                    }
                    <div className="card-details">
                      <CardContent>
                        <p>{obj.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              );
            })}
          </Grid>


          <Grid item xs={12} md={6} className="news-info-scrollers">
            <Typography variant="h5" className={classes.title}>
              Archdiocesan News
            </Typography>
            {archdiocesanNews.length>0 &&
              <div className="als-container"
                ref={el => initializeNewsScroller(el)} >
                <div className="als-viewport">
                  <div className="als-wrapper">
                    {archdiocesanNews.map((obj, index) => {
                      return (
                        <div key={index} className="als-item title">
                          <a href={obj.link} target="_blank">
                            {obj.title}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            }
          </Grid>

          <Grid item xs={12} md={6} className="news-info-scrollers">
            <Typography variant="h5" className={classes.title}>
              Vatican News
            </Typography>
            {vaticanNews.length>0 &&
              <div className="als-container"
                ref={el => initializeNewsScroller(el)} >
                <div className="als-viewport">
                  <div className="als-wrapper">
                    {vaticanNews.map((obj, index) => {
                      return (
                        <div key={index} className="als-item title">
                          <a href={obj.link} target="_blank">
                            {obj.title}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            }
          </Grid>

        </Grid>
      </div>
    </div>


  );
}
