import React, { useState, useEffect } from "react";
import Moment from 'moment';
import { Link as RouterLink } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons

// core components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import basicsStyle from "../styles";

const styles = {
  ...basicsStyle
};

const useStyles = makeStyles(styles);

export default function AnnouncementsList({subTitle, announcements}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {announcements &&
        <React.Fragment>
          <h4 className={classes.subTitle}>{subTitle}</h4>
          <List key={classes.list} className={classes.list}>
            {announcements.map((announcement, index) => {
              return (
                <React.Fragment>
                  <ListItem key={index} alignItems="flex-start" className={classes.listItem}>
                    <ListItemText className="announcement-wrapper">
                      {announcement instanceof Object > 0 ?
                        <React.Fragment>
                          <h4 className={classes.massTitle}>{announcement.title}</h4>
                          <div className={classes.massTime}>{announcement.date && Moment(announcement.date).format('D MMM YYYY')}</div>
                        </React.Fragment>
                      :
                        <div className="title">{announcement}</div>
                      }
                    </ListItemText>
                  </ListItem>
                  { announcements.length != index+1 && 
                    <Divider component="li" />
                  }
                </React.Fragment>
              );
            })}
          </List>
        </React.Fragment>
      }
    </React.Fragment>
  );
}
