import React, { useState } from "react";

// @material-ui/core components
import Chip from '@material-ui/core/Chip';
import { makeStyles } from "@material-ui/core/styles";

// react components for routing our app without refresh
import { Link } from "react-router-dom";
import AudioPlayer from 'material-ui-audio-player';

// @material-ui/icons
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

// core components
import Card from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import stRitaCardImage from "assets/img/st-rita-card.jpg";
import chapelCardImage from "assets/img/chapel.jpg";
import covidCardImage from "assets/img/covid-19.png";


import {
  cardTitle,
  cardLink,
  cardSubtitle,
  card
} from "assets/jss/material-kit-react.js";

import ChapelServicesGrid from "./ChapelServiceGrid";

import ChapelServices from "../../services/ChapelServices";
import { dailyServiceList } from "./utils";

import basicsStyle, { playerStyles, imageStyles } from './styles';

const styles = {
  ...basicsStyle,
  cardTitle,
  cardLink,
  cardSubtitle,
  card,
  ...imageStyles
};

const useStyles = makeStyles(styles);
const playerUseStyles = makeStyles(playerStyles);

export default function HomePage() {
  const classes = useStyles();
  const [chapelServices, setChapelServices] = useState({});

  const fetchChapelServices = async () => {
    let data = await ChapelServices.list();
    let list = dailyServiceList(data);
    setChapelServices(list);
  }

  React.useEffect(() => {
    fetchChapelServices();
  }, []);

  return (
    <div className={classes.sections}>
      <div className={`${classes.container} tile-cards-container`}>
        <Card className={`${classes.card} card-wrapper`}>
          <img className={classes.imgCard} src={stRitaCardImage} alt="Card-img" />
          <div className={classes.imgCardOverlay}>
            <h2>Novenas & Feast</h2>
            {/* <p>Find the latest of the Novenas & Feast details here</p> */}
            <Link to="/novenas" className={classes.cardLink+' '+classes.viewLink}>View</Link>
          </div>
        </Card>
        <Card className={`${classes.card} card-wrapper`}>
          <img className={classes.imgCard} src={chapelCardImage} alt="Card-img" />
          <div className={classes.imgCardOverlay}>
            <h2>Chapel Announcement</h2>
            {/* <p>Find the latest from the chapel</p> */}
            <Link to={"/announcements"} className={classes.cardLink+' '+classes.viewLink}>View</Link>
          </div>
        </Card>

        <Card className={`${classes.card} card-wrapper`}>
          <img className={classes.imgCard} src={covidCardImage} alt="Card-img" />
          <div className={classes.imgCardOverlay}>
            <h2>COVID-19 Updates</h2>
            {/* <p>Find the latest news and updates from Vatican and Archdiocesan</p> */}
            <Link to={"/updates"} className={classes.cardLink+' '+classes.viewLink}>View</Link>
          </div>
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
      <div className={`${classes.container} ${classes.serviceSection}`}>
        <h3 className={classes.prayerTitle}>Our Chapel Services <Chip color="secondary" label="No services are held due to COVID-19" icon={<SentimentVeryDissatisfiedIcon />}/></h3>
        <h4 className={classes.prayerTitle}>Daily Masses</h4>
        <ChapelServicesGrid services={chapelServices} />
      </div>
    </div>
  );
}
