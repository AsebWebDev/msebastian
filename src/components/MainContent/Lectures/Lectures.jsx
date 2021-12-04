import React, { useContext } from 'react'
import { Container, Header, List} from 'semantic-ui-react';
import ListItem from '../ListItem'
import { dict } from "../../../translations";
import { LanguageContext } from "../../../App";
import './Lectures.scss'
import { isMobile } from '../../../utilities/helpers';

export default function Lectures() {
    const lang = useContext(LanguageContext);
    const inverted = !isMobile();

    return (
        <Container text id='lectures'>
          <Header inverted={inverted} as='h1'>{dict[lang].LECTURES.LECTURES_TITLE}</Header>

            {/* Vorträge auf wissenschaftlichen Tagungen */}
            <Header color='blue' inverted={inverted} as='h2'>{dict[lang].LECTURES.LECTURES_1_HEADER}</Header>
            <List inverted={inverted} divided relaxed >
              {dict[lang].LECTURES.LECTURES_1_ITEMS.map(lecture => <ListItem header={lecture.dateandvenue} metaText={lecture.title}/>)}
            </List>

            {/* Vorträgen auf Einladung wissenschaftlicher Organisationen*/}
            <Header color='blue' inverted={inverted} as='h2'>{dict[lang].LECTURES.LECTURES_2_HEADER}</Header>
            <List inverted={inverted} divided relaxed >
              {dict[lang].LECTURES.LECTURES_2_ITEMS.map(lecture => <ListItem header={lecture.dateandvenue} metaText={lecture.title}/>)}
            </List>
        </Container>
    )
}
