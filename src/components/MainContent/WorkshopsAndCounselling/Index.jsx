import React from "react";
import { Grid } from "semantic-ui-react";
import WorkshopsAndCounselling from './WorkshopsAndCounselling'
import './Index.scss'

export default function Index() {
  return (
        <Grid stackable columns={3} id="wc-index">
            <Grid.Row>
            {/* <Grid.Column width={5}/>
            <Grid.Column width={10}> */}
                <WorkshopsAndCounselling />
            {/* </Grid.Column>
            <Grid.Column width={1} /> */}
            </Grid.Row>
        </Grid>
  );
}
