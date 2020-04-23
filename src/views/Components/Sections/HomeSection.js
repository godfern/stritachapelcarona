import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

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

export default function HomeSection() {
  const classes = useStyles();

  React.useEffect(() => {
    
  });

  return (
    <div className={classes.sections}>
      <div className={`${classes.container} tile-cards-container`}>
        <Card className={`${classes.card} card-wrapper`}>
          <CardBody>
            <h4 className={classes.cardTitle}>Novenas & Feast</h4>
            <p>
              Find the latest of the Novenas & Feast details here
            </p>
            <a
              href="#pablo"
              className={classes.cardLink}
              onClick={(e) => e.preventDefault()}>
              View
            </a>
          </CardBody>
        </Card>
        <Card className={`${classes.card} card-wrapper`}>
          <CardBody>
            <h4 className={classes.cardTitle}>Chapel Announcement</h4>
            <p>
              Find the latest from the chapel
            </p>
            <a
              href="#pablo"
              className={classes.cardLink}
              onClick={(e) => e.preventDefault()}>
              View
            </a>
          </CardBody>
        </Card>

        <Card className={`${classes.card} card-wrapper`}>
          <CardBody>
            <h4 className={classes.cardTitle}>Chaplain  Message</h4>
            <p>
              Chaplain message to the people of carona
            </p>
            <a
              href="#pablo"
              className={classes.cardLink}
              onClick={(e) => e.preventDefault()}>
              View
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
