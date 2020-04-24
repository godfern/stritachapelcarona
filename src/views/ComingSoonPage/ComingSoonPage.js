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
    <div className={classes.container}>
      <ComingSoonSection />
    </div>
  );
}
