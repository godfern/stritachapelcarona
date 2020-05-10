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

import newsUpdate from "../../services/NewsUpdate";

import {
  card
} from "assets/jss/material-kit-react.js";

import basicsStyle from "./styles";

const styles = {
  ...basicsStyle,
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

      <GridContainer className={classes.sectionHeader}
          direction="column"
          justify="center"
          alignItems="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2> Latest Updates on Covid-19</h2>
            <h4>Our Chapel brings you here the latest from the Catholic Church with respect to the current on-going Pandemic(Covid-19)</h4>
          </GridItem>
      </GridContainer>

        <Grid container spacing={2} className="feasts-list">
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
                  <List className="als-wrapper">
                    {archdiocesanNews.map((obj, index) => {
                      return (
                        <ListItem key={index} className="als-item title">
                          <a href={obj.link} target="_blank">
                            {obj.title}
                          </a>
                        </ListItem>
                      );
                    })}
                  </List>
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
                  {/* <div className="als-wrapper"> */}
                  <List className="als-wrapper">
                    {vaticanNews.map((obj, index) => {
                      return (
                        <ListItem key={index} className="als-item title">
                          <a href={obj.link} target="_blank">
                            {obj.title}
                          </a>
                        </ListItem>
                        // <div key={index} className="als-item title">
                        //   <a href={obj.link} target="_blank">
                        //     {obj.title}
                        //   </a>
                        // </div>
                      );
                    })}
                  </List>
                  {/* </div> */}
                </div>
              </div>
            }
          </Grid>

        </Grid>
      </div>
    </div>


  );
}
