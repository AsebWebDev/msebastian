import React from "react";
import { Grid } from "semantic-ui-react";
import AboutMe from './AboutMe'
import CV from './CV'
import News from './News'
import "./Index.scss";

export default function Index() {
  return (
    <Grid stackable columns={3} id="aboutme-index">
      <Grid.Row>
        <Grid.Column width={4}>
          <AboutMe />
        </Grid.Column>
        <Grid.Column width={6}>
          <CV />
        </Grid.Column>
        <Grid.Column width={4}>
          <News />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
