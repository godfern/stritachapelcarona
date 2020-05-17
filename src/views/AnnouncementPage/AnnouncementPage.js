import React, { useState, useEffect } from "react";
import Moment from 'moment';
import { Link as RouterLink } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

// @material-ui/icons

import announcement from "../../services/Announcement";

import basicsStyle from "./styles";

import AnnouncementsList from './Sections/AnnouncementsList';

const styles = {
  ...basicsStyle
};

const useStyles = makeStyles(styles);

export default function AnnouncementPage() {
  const classes = useStyles();
  const [announcement_json, setAnnouncements] = useState({});

  const fetchAnnouncements = async () => {
    let data = await announcement.list();
    setAnnouncements(data);
  }

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  let chapelAnnouncements = Object.keys(announcement_json).length && announcement_json["our_chapel"] || [];
  let chapelWeeklyAnnouncements =  Object.keys(announcement_json).length && announcement_json["our_chapel"]["weekly_announcements"] || [];
  let villageAnnouncements = Object.keys(announcement_json).length && announcement_json["our_chapel"]["village_announcements"] || [];
  let otherAnnouncements = Object.keys(announcement_json).length && announcement_json["our_chapel"]["other_announcements"] || [];
  let churchOtherAnnouncements = Object.keys(announcement_json).length && announcement_json["our_church"]["other_announcements"] || [];
  let churchWeeklyAnnouncements =  Object.keys(announcement_json).length && announcement_json["our_church"]["weekly_announcements"] || [];
  let churchWeeklyMasses =  Object.keys(announcement_json).length && announcement_json["our_church"]["weekly_masses"] || [];

  return (

    <div className={`${classes.sections} announcement-page-container`}>
      <div className={`${classes.container}`}>
      <GridContainer className={classes.sectionHeader}
          direction="column"
          justify="center"
          alignItems="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Weekly announcements from the Chapel and Church </h2>
            <h3>Our Chapel brings you here weekly announcements</h3>
          </GridItem>
      </GridContainer>

        <Grid container spacing={2} className="announcement-list">
        <SnackbarContent
          message={
            <span>
              Please note Masses are held without the congregation
            </span>
          }
          color="danger"
        />
          <Grid item xs={12} md={8}>
            {chapelAnnouncements.length > 0 &&
              <>
                <h4 className="main-title">Chapel Announcements</h4>
                {
                chapelWeeklyAnnouncements.length > 0 &&
                  <AnnouncementsList subTitle="Weekly Announcements"
                  announcements={ chapelWeeklyAnnouncements } />
                }
                
                {
                villageAnnouncements.length > 0 && 
                  <AnnouncementsList subTitle="Village Announcements"
                  announcements={villageAnnouncements } />
                }
                {
                  otherAnnouncements.length > 0 && 
                  <AnnouncementsList subTitle="Other Announcements"
                  announcements={ otherAnnouncements} />
                }
              </>
            }
          </Grid>

          <Grid item xs={12} md={8}>
            {announcement_json["our_church"] &&
              <>
                <h4 className="main-title">Church Announcements</h4>
                {churchWeeklyAnnouncements.length > 0 &&
                  <AnnouncementsList subTitle="Weekly Announcements"
                  announcements={churchWeeklyAnnouncements} />
                }
                {
                  churchWeeklyMasses.length > 0 &&
                  <AnnouncementsList subTitle="Weekly Masses"
                  announcements={ churchWeeklyMasses } />
                }
                  {
                    churchOtherAnnouncements.length > 0 && 
                    <AnnouncementsList subTitle="Other Announcements"
                  announcements={ churchOtherAnnouncements } />
                  }
              </>
            }
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
