import React, { Component } from "react";
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/MainHeader/MainHeader.js";
import Footer from "components/MainFooter/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import BannerMainContent from "components/BannerMainContent/BannerMainContent.js";

// sections for this page
import HeaderLinks from "components/MainHeader/MainHeaderLinks.js";
import basicsStyle, { imageStyles } from './styles';

const allStyles = {
  ...basicsStyle,
  ...imageStyles,
  // ...typographyStyle
};

const useStyles = allStyles;

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
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
              <GridItem xs={12} sm={6} className={classes.textCenter}>
                <h3  className={classes.chapelTitles}>St. Rita's Chapel</h3>
              </GridItem>
              <GridItem xs={12} sm={6} className={classes.textCenter}>
                <h4 className={classes.chapelTitles}>
                  Carona, Aldona, Goa.
                  </h4>
              </GridItem>
              <GridItem xs={10} sm={10} md={3}>
                <img
                  src={"https://dl.dropboxusercontent.com/s/gkt4zxmet2r0yfs/st-rita-banner.jpeg?dl=0"}
                  alt="..."
                  className={
                    classes.imgFluid +
                    " " +
                    classes.imgCard
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </BannerMainContent>
        <div className={classNames(classes.main, classes.mainRaised)}>
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Layout)
