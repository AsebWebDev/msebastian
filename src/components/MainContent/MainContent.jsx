import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './MainContent.scss'
import AboutMe from './AboutMe/AboutMe'
  
  export default function MainContent() {
    return (
      <div id="main">
        <Switch>
              {/* <Route path="/" exact component={isLoggedIn ? Dashboard : LandingPage} /> */}
              <Route path="/aboutme" component={AboutMe} />
              <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
}
