/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "./styles";

const useStyles = makeStyles(styles);

export default function MainFooter(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.facebook.com/pages/St-Ritas-Chapel-Carona/665724790108489"
                className={classes.block}
                target="_blank"
              >
                Facebook
              </a>
            </ListItem>
            
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , St. Rita's Chapel, Carona, Aldona 
        </div>
      </div>
    </footer>
  );
}

MainFooter.propTypes = {
  whiteFont: PropTypes.bool
};
