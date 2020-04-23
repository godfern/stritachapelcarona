import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/MainHeader/MainHeader.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import Parallax from "components/Parallax/Parallax.js";
import BannerMainContent from "components/BannerMainContent/BannerMainContent.js";

// sections for this page
import HeaderLinks from "components/MainHeader/MainHeaderLinks.js";
import HomeSection from "./Sections/HomeSection.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import image from "assets/img/st-rita.gif";

import styles from "assets/jss/material-kit-react/views/components.js";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);
const useTypographyStyle = makeStyles(typographyStyle);

export default function Components(props) {
  const classes = useStyles();
  const typographyClasses = useTypographyStyle();
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
          <div className="sky">
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
                    typographyClasses.imgRaised +
                    " " +
                    typographyClasses.imgRoundedCircle +
                    " " +
                    typographyClasses.imgFluid
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
        <HomeSection />
        {/* <SectionNavbars /> */}
        {/*  <SectionTabs />*/}
        {/* <SectionPills />  */}
        {/* <SectionNotifications /> */}
        {/* <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>*/}
        {/* <SectionExamples /> */}
        {/* <SectionDownload />  */}
      </div>
      <Footer />
    </div>
  );
}
