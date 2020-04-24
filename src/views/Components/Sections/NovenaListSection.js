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

export default function NovenaListSection() {
  const classes = useStyles();

  React.useEffect(() => {
    
  });

  return (
    <div>Novenas</div>
  );
}
