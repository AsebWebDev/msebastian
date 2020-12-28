import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './MainContent.scss'
import AboutMe from './AboutMe/AboutMe'
import Publications from './Publications/Publications'
import Lectures from './Lectures/Lectures'
import Press from './Press/Press'
import WorkshopsAndCounselling from './WorkshopsAndCounselling/WorkshopsAndCounselling'
  
  export default function MainContent() {
    return (
      <div id="main">
        <Switch>
              {/* <Route path="/" exact component={isLoggedIn ? Dashboard : LandingPage} /> */}
              <Route path="/aboutme" component={AboutMe} />
              <Route path="/publications" component={Publications} />
              <Route path="/lectures" component={Lectures} />
              <Route path="/press" component={Press} />
              <Route path="/workshopsandcounselling" component={WorkshopsAndCounselling} />
              <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
}
