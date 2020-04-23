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


import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.js";
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const styles = {
  ...basicsStyle,
  ...downloadStyle,
  cardTitle,
  cardLink,
  cardSubtitle
};

const useStyles = makeStyles(styles);

export default function HomeSection() {
  const classes = useStyles();

  React.useEffect(() => {
    
  });

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
          <Card style={{width: "20rem"}}>
            <CardBody>
              <h4 className={classes.cardTitle}>Novenas & Feast</h4>
              <p>
                Find the latest of the Novenas & Feast details here
              </p>
              <Link to={"/coming-soon-page"} className={classes.link}>
                  <Button color="primary" size="lg" simple>
                    View
                  </Button>
                </Link>
            </CardBody>
          </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem"}}>
              <CardBody>
                <h4 className={classes.cardTitle}>Chapel Announcement</h4>
                <p>
                  Find the latest from the Chapel and its future program
                </p>
                <Link to={"/coming-soon-page"} className={classes.link}>
                  <Button color="primary" size="lg" simple>
                    View
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem"}}>
              <CardBody>
                <h4 className={classes.cardTitle}>Chaplain  Message</h4>
                <p>
                  Chaplain message to the people of carona
                </p>
                <Link to={"/coming-soon-page"} className={classes.link}>
                  <Button color="primary" size="lg" simple>
                    View
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
