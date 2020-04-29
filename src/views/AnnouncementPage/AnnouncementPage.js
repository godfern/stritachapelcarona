import React, { useState, useEffect } from "react";
import Moment from 'moment';
import { Link as RouterLink } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons

import announcement from "../../services/Announcement";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

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

  return (

    <div className={`${classes.sections} announcement-page-container`}>
      <div className={`${classes.container}`}>
        <Grid container spacing={2} className="announcement-list">
          <Grid item xs={12} md={8}>
            {announcement_json["our_chapel"] &&
              <React.Fragment>
                <Typography variant="h5" className={`${classes.title} main-title`}>
                  Chapel Announcements
                </Typography>
                <AnnouncementsList subTitle="Weekly Announcements"
                  announcements={ announcement_json["our_chapel"]["weekly_announcements"] } />
                <AnnouncementsList subTitle="Village Announcements"
                  announcements={ announcement_json["our_chapel"]["village_announcements"] } />
                <AnnouncementsList subTitle="Other Announcements"
                  announcements={ announcement_json["our_chapel"]["other_announcements"] } />
              </React.Fragment>
            }
          </Grid>

          <Grid item xs={12} md={8}>
            {announcement_json["our_church"] &&
              <React.Fragment>
                <Typography variant="h5" className={`${classes.title} main-title`}>
                  Church Announcements
                </Typography>
                <AnnouncementsList subTitle="Weekly Announcements"
                  announcements={ announcement_json["our_church"]["weekly_announcements"] } />
                <AnnouncementsList subTitle="Mass For The Dead"
                  announcements={ announcement_json["our_church"]["mass_for_the_dead"] } />
                <AnnouncementsList subTitle="Other Announcements"
                  announcements={ announcement_json["our_church"]["other_announcements"] } />
              </React.Fragment>
            }
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
