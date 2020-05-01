import React, {Component} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import SectionNavbars from "../views/Components/Sections/SectionNavbars";
import SectionTabs from "../views/Components/Sections/SectionTabs.js";
import SectionPills from "../views/Components/Sections/SectionPills.js";
import SectionNotifications from "../views/Components/Sections/SectionNotifications.js";
import SectionTypography from "../views/Components/Sections/SectionTypography.js";
import SectionJavascript from "../views/Components/Sections/SectionJavascript.js";
import SectionCarousel from "../views/Components/Sections/SectionCarousel.js";
import SectionCompletedExamples from "../views/Components/Sections/SectionCompletedExamples.js";
import SectionLogin from "../views/Components/Sections/SectionLogin.js";
import SectionExamples from "../views/Components/Sections/SectionExamples.js";
import SectionDownload from "../views/Components/Sections/SectionDownload.js";

import image from "assets/img/st-rita.gif";

import styles from "assets/jss/material-kit-react/views/components.js";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";


const allStyles = {
  ...styles,
  ...typographyStyle
};

// const useStyles = ;
const emptyLoading = () => <div></div>;
const loading = () => <div className="text-center"></div>;

const useStyles = allStyles;

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Header
          brand="St. Rita's Chapel, Carona"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
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
                    className={`${classes.imgRaised}
                      ${classes.imgRoundedCircle}
                      ${classes.imgFluid}
                      st-ritas-img`}
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
          
          {this.props.children}

          {/* <SectionNavbars />
           <SectionTabs />
          <SectionPills /> 
          <SectionNotifications /> */}
          {/* <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />*/}
          {/* <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem> */}
          {/* <SectionExamples /> */}
          {/* <SectionDownload />  */}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Layout)
