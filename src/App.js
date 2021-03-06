import React, { Component} from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Layout from "./layouts";

// pages for this product
import HomePage from "./views/HomePage/HomePage";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";
import ComingSoonPage from "./views/ComingSoonPage/ComingSoonPage";
import NovenaPage from "./views/NovenaPage/NovenaPage";
import AnnouncementPage from "./views/AnnouncementPage/AnnouncementPage";
import NewsAndUpdatesPage from "./views/NewsAndUpdatesPage/NewsAndUpdatesPage";
import OurChapelPage from "./views/OurChapelPage/OurChapelPage";

// import { configure } from "./helpers/mock-api";
// Mocking all the APIs over here
// configure();

var hist = createBrowserHistory();

function RouteWithLayout({layout, component, ...rest}){
  return (
    <Route {...rest} render={(props) =>
      React.createElement(layout, props, React.createElement(component, props))
    }/>
  );
}

class App extends Component{
  render(){
    return (
      <Router history={hist}>
        <Switch>
          <RouteWithLayout layout={Layout} path="/landing-page" component={LandingPage} />
          <RouteWithLayout layout={Layout} path="/profile-page" component={ProfilePage} />
          <RouteWithLayout layout={Layout} path="/login-page" component={LoginPage} />
          <RouteWithLayout layout={Layout} path="/novenas" component={NovenaPage} />
          <RouteWithLayout layout={Layout} path="/announcements" component={AnnouncementPage} />
          <RouteWithLayout layout={Layout} path="/updates" component={NewsAndUpdatesPage} />
          <RouteWithLayout layout={Layout} path="/coming-soon-page" component={ComingSoonPage}/>
          <RouteWithLayout layout={Layout} path="/our-chapel" component={OurChapelPage}/>
          <RouteWithLayout layout={Layout} path="/" component={HomePage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;