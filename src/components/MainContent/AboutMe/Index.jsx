import React from "react";
import { Grid } from "semantic-ui-react";
import AboutMe from './AboutMe'
import CV from './CV'
import "./Index.scss";

export default function Index() {
  return (
    <Grid stackable columns={2} id="aboutme-index">
      <Grid.Row stretched>
        <Grid.Column width={6}>
          <AboutMe />
        </Grid.Column>
        <Grid.Column width={10}>
          <CV />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
