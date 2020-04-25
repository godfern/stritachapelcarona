import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/MainHeader/MainHeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import BannerMainContent from "components/BannerMainContent/BannerMainContent.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import componentStyles from "assets/jss/material-kit-react/views/components.js";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

import image from "assets/img/st-rita.gif";

// Sections for this page
import ComingSoonSection from "./Sections/ComingSoonSection.js";

const dashboardRoutes = [];

const allStyles = {
    ...styles,
    ...typographyStyle,
    ...componentStyles
  };
  
  const useStyles = makeStyles(allStyles);

export default function ComingSoonPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="St. Rita's Chapel, Carona"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <BannerMainContent backgroundColor={"#007fd5"}>
        <div className={classes.container}>
          <div class="sky">
            <div className={classes.cloudsOne}></div>
            <div className={classes.cloudsTwo}></div>
            <div className={classes.cloudsThree}></div>
          </div>
          <GridContainer direction="column"
            alignItems="center"
            justify="center">
            <GridItem xs={12} sm={2}>
              <div className={classes.brand}>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} className={classes.textCenter}>
              <h3>St. Rita's Chapel</h3>
            </GridItem>
            <GridItem xs={12} sm={6} className={classes.textCenter}>
              <h4>
                Carona, Aldona, Goa.
                </h4>
            </GridItem>
          </GridContainer>
        </div>
      </BannerMainContent>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ComingSoonSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
