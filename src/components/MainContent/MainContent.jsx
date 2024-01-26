import React from "react";
import { Route, Switch } from "react-router-dom";
import "./MainContent.scss";
import AboutMe from "./AboutMe/Index";
import Publications from "./Publications/Index";
import Lectures from "./Lectures/Index";
import Press from "./Press/Press";
import PublicSpeaking from "./PublicSpeaking/Index.jsx";

export default function MainContent() {
  return (
    <div id="main-content">
      <Switch>
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/publications" component={Publications} />
        <Route path="/lectures" component={Lectures} />
        <Route path="/press" component={Press} />
        <Route path="/publicspeaking" component={PublicSpeaking} />
        <Route render={() => <AboutMe />} />
      </Switch>
    </div>
  );
}
