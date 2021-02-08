import React from "react";
import { Grid } from "semantic-ui-react";
import AboutMe from './AboutMe'
import CV from './CV'
import "./Index.scss";

export default function Index() {
  return (
    <Grid stackable columns={2} id="aboutme-index">
      <Grid.Row>
        <Grid.Column width={4}>
          <AboutMe />
        </Grid.Column>
        <Grid.Column width={12}>
          <CV />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
