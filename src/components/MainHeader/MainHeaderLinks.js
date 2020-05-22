/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Home } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function MainHeaderLinks(props) {
  const classes = useStyles();

  const history = useHistory();

  function handleClick(type) {
    history.push(type);
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Button
        className={classes.navLink}
        onClick={e => handleClick("/")}
        color="transparent"
      >
        <Home className={classes.icons} /> Home
      </Button>
      <Button
        className={classes.navLink}
        onClick={e => handleClick("/our-chapel")}
        color="transparent"
      >
        Our Chapel
      </Button>
        
      </ListItem>
    </List>
  );
}
