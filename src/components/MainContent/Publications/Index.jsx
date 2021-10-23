import React from "react";
import { Grid } from "semantic-ui-react";
import Publications from "./Publications";
import "./Index.scss";

export default function Index() {
  return (
    <Grid stackable columns={3} id="publication-index">
      <Grid.Row>
        <Grid.Column width={5} />
        <Grid.Column width={10}>
          <Publications />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );
}
