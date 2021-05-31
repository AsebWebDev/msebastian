import React from 'react'
import { Container, Header, List} from 'semantic-ui-react';
import ListItem from '../ListItem'
import { dict } from '../../../utilities/translation'

import './Lectures.scss'

export default function Lectures() {
    return (
        <Container text id='lectures'>
          <Header inverted as='h1'>{dict.de.LECTURES.LECTURES_TITLE}</Header>

            {/* Vorträge auf wissenschaftlichen Tagungen */}
            <Header color='blue' inverted as='h2'>{dict.de.LECTURES.LECTURES_1_HEADER}</Header>
            <List inverted divided relaxed >
              {dict.de.LECTURES.LECTURES_1_ITEMS.map(lecture => <ListItem header={lecture.dateandvenue} metaText={lecture.title}/>)}
            </List>

            {/* Vorträgen auf Einladung wissenschaftlicher Organisationen*/}
            <Header color='blue' inverted as='h2'>{dict.de.LECTURES.LECTURES_2_HEADER}</Header>
            <List inverted divided relaxed >
              {dict.de.LECTURES.LECTURES_2_ITEMS.map(lecture => <ListItem header={lecture.dateandvenue} metaText={lecture.title}/>)}
            </List>
        </Container>
    )
}
