import React from "react";
import { Grid } from "semantic-ui-react";
import PublicSpeaking from './PublicSpeaking'
import './Index.scss'

export default function Index() {
  return (
        <Grid stackable columns={3} id="publicspeaking-index">
            <Grid.Row>
            {/* <Grid.Column width={5}/>
            <Grid.Column width={10}> */}
                <PublicSpeaking />
            {/* </Grid.Column>
            <Grid.Column width={1} /> */}
            </Grid.Row>
        </Grid>
  );
}
