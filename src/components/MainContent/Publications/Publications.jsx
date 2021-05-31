import { Container, Header, List,  } from 'semantic-ui-react';
import ListItem from '../ListItem'
import { dict } from '../../../utilities/translation'
import './Publications.scss'

export default function Publications() {
    return (
      <Container text id='publications'>
        <Header inverted as='h1'>{dict.de.PUBLICATIONS.PUBLICATIONS_TITLE}</Header>
        
        {/* Artikel in Fachzeitschriften */}

        <Header color='blue' inverted as='h2'>{dict.de.PUBLICATIONS.PUBLICATIONS_1_HEADER}</Header>
        <List inverted divided relaxed >
          {dict.de.PUBLICATIONS.PUBLICATIONS_1_ITEMS.map(publication => <ListItem header={`${publication.author}`} metaText={`${publication.title}`}/>)}
        </List>

        {/* Artikel in Begutachtung */}

        <Header color='blue' inverted as='h2'>{dict.de.PUBLICATIONS.PUBLICATIONS_2_HEADER}</Header>
        <List inverted divided relaxed >
          {dict.de.PUBLICATIONS.PUBLICATIONS_2_ITEMS.map(publication => <ListItem header={`${publication.author}`} metaText={`${publication.title}`}/>)}
        </List>

        {/* Artikel in wissenschaftlichen Sammelbänden */}
        <Header color='blue' inverted as='h2'>{dict.de.PUBLICATIONS.PUBLICATIONS_3_HEADER}</Header>
        <List inverted divided relaxed>
          {dict.de.PUBLICATIONS.PUBLICATIONS_3_ITEMS.map(publication => <ListItem header={`${publication.author}`} metaText={`${publication.title}`}/>)}
        </List> 
          
        {/* Wissenschaftsjournalistische und andere Artikel */}
        <Header color='blue' inverted as='h2'>{dict.de.PUBLICATIONS.PUBLICATIONS_4_HEADER}</Header>
        <List inverted divided relaxed>
          {dict.de.PUBLICATIONS.PUBLICATIONS_4_ITEMS.map(publication => <ListItem header={`${publication.author}`} metaText={`${publication.title}`}/>)}
        </List> 

        {/* Tagungsberichte und Rezensionen */}
        <Header color='blue' inverted as='h2'>{dict.de.PUBLICATIONS.PUBLICATIONS_5_HEADER}</Header>
        <List inverted divided relaxed>
          {dict.de.PUBLICATIONS.PUBLICATIONS_5_ITEMS.map(publication => <ListItem header={`${publication.author}`} metaText={`${publication.title}`}/>)}
        </List> 
      </Container>
    )
}
