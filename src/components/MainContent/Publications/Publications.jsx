import { Container, Header, List,  } from 'semantic-ui-react';
import ListItem from '../ListItem'
import t from '../../../utilities/translation'
import './Publications.scss'

export default function Publications() {
    return (
      <Container text id='publications'>
        <Header inverted as='h1'>{t('de', 'PUBLICATIONS', 'PUBLICATIONS_TITLE')}</Header>
        
        {/* Artikel in Fachzeitschriften */}

        <Header color='blue' inverted as='h2'>{t('de', 'PUBLICATIONS', 'PUBLICATIONS_1_TITLE')}</Header>
        <List inverted divided relaxed >
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1_AUTHOR_1')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1_TITLE_1')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1_AUTHOR_2')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1_TITLE_2')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1_AUTHOR_3')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1_TITLE_3')}`}/>
        </List>

        {/* Artikel in Begutachtung */}

        <Header color='blue' inverted as='h2'>{t('de', 'PUBLICATIONS', 'PUBLICATIONS_1a_TITLE')}</Header>
        <List inverted divided relaxed >
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1a_AUTHOR_1')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1a_TITLE_1')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1a_AUTHOR_2')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1a_TITLE_2')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1a_AUTHOR_3')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_1a_TITLE_3')}`}/>
        </List>

        {/* Artikel in wissenschaftlichen Sammelbänden */}
        <Header color='blue' inverted as='h2'>{t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE')}</Header>
        <List inverted divided relaxed>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_1')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_1')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_2')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_2')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_3')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_3')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_4')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_4')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_5')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_5')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_6')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_6')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_7')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_7')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_8')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_8')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_9')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_9')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_AUTHOR_10')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_2_TITLE_10')}`}/>
        </List> 
          
        {/* Wissenschaftsjournalistische und andere Artikel */}
        <Header color='blue' inverted as='h2'>{t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE')}</Header>
        <List inverted divided relaxed>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_1')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_1')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_2')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_2')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_3')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_3')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_4')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_4')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_5')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_5')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_6')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_6')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_7')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_7')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_8')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_8')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_9')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_9')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_10')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_10')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_11')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_11')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_AUTHOR_12')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_3_TITLE_12')}`}/>
        </List> 

        {/* Tagungsberichte und Rezensionen */}
        <Header color='blue' inverted as='h2'>{t('de', 'PUBLICATIONS', 'PUBLICATIONS_4_TITLE')}</Header>
        <List inverted divided relaxed>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_4_AUTHOR_1')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_4_TITLE_1')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_4_AUTHOR_2')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_4_TITLE_2')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_4_AUTHOR_3')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_4_TITLE_3')}`}/>
          <ListItem header={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_4_AUTHOR_4')}`} metaText={`${t('de', 'PUBLICATIONS', 'PUBLICATIONS_4_TITLE_4')}`}/>
        </List> 

      </Container>
    )
}
