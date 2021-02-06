import React from 'react'
import { Grid } from "semantic-ui-react";
import Lectures from './Lectures'
import './Index.scss'

function Index() {
    return (
        <Grid stackable columns={3} id="lectures-index" classname="test">
            <Grid.Row>
            <Grid.Column width={5}/>
            <Grid.Column width={10}>
                <Lectures />
            </Grid.Column>
            <Grid.Column width={1} />
            </Grid.Row>
        </Grid>
    )
}

export default Index

