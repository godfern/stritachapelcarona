import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import AudioPlayer from 'material-ui-audio-player';

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {
  cardTitle,
  cardLink,
  cardSubtitle,
  card
} from "assets/jss/material-kit-react.js";

import basicsStyle, { playerStyles } from './styles';

const styles = {
  ...basicsStyle,
  cardTitle,
  cardLink,
  cardSubtitle,
  card
};

const useStyles = makeStyles(styles);
const playerUseStyles = makeStyles(playerStyles);

export default function HomePage() {
  const classes = useStyles();

  React.useEffect(() => {

  });

  return (
    <div className={classes.sections}>
      <div className={`${classes.container} tile-cards-container`}>
        <Card className={`${classes.card} card-wrapper`}>
          <CardBody>
            <h3>Novenas & Feast</h3>
            <p>
              Find the latest of the Novenas & Feast details here
            </p>
            <Link to="/novenas" className={classes.cardLink}>View</Link>
          </CardBody>
        </Card>
        <Card className={`${classes.card} card-wrapper`}>
          <CardBody>
            <h3>Chapel Announcement</h3>
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
      <div className={`${classes.container} ${classes.prayerSection}`}>
        <h1 className={classes.prayerTitle}>Prayer to Saint Rita</h1>
        <p className={classes.prayerContent}>Holy Patroness of those in need, Saint Rita, so humble, pure and patient, whose pleadings with thy Divine Spouse are irresistible, obtain for me from thy Crucified Christ my request (mention it here). Be kind to me, for the greater glory of God, and I promise to honor thee and to sing thy praises forever.</p>
        <p className={classes.prayerContent}>Oh glorious St. Rita, who didst miraculously participate in the sorrowful Passion of our Lord Jesus Christ, obtain for me the grace to suffer with resignation the troubles of this life, and protect me in all my needs. Amen</p>
        <GridContainer direction="column"
          alignItems="flex-end">
          <GridItem xs={12} sm={4} className={classes.textCenter}>
            <AudioPlayer src="https://www.8notes.com/school/mp32/voice/santa_lucia_VOICE.mp3"
              useStyles={playerUseStyles} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
