import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import {
  cardTitle,
  cardLink,
  cardSubtitle,
  card
} from "assets/jss/material-kit-react.js";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const styles = {
  ...basicsStyle,
  ...downloadStyle,
  cardTitle,
  cardLink,
  cardSubtitle,
  card
};

const useStyles = makeStyles(styles);

export default function HomePage() {
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
            <Link to="/novenas" className={classes.cardLink}>View</Link>
          </CardBody>
        </Card>
        <Card className={`${classes.card} card-wrapper`}>
          <CardBody>
            <h4 className={classes.cardTitle}>Chapel Announcement</h4>
            <p>
              Find the latest from the chapel
            </p>
            <Link to={"/announcements"} className={classes.cardLink}>View</Link>
          </CardBody>
        </Card>

        <Card className={`${classes.card} card-wrapper`}>
          <CardBody>
            <h4 className={classes.cardTitle}>COVID-19 Updates</h4>
            <p>
              Find the latest news and updates from Vatican and Archdiocesan
            </p>
            <Link to={"/coming-soon-page"} className={classes.cardLink}>View</Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
