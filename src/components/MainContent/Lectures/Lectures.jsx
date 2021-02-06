import React from 'react'
import { Container, Header, List} from 'semantic-ui-react';
import ListItem from '../ListItem'
import t from '../../../utilities/translation'

import './Lectures.scss'

export default function Lectures() {
    return (
        <Container text id='lectures'>
          <Header inverted as='h1'>{t('de', 'LECTURES', 'LECTURES_TITLE')}</Header>

            {/* Vorträge auf wissenschaftlichen Tagungen */}
            <Header color='blue' inverted as='h2'>{t('de', 'LECTURES', 'LECTURES_1_TITLE')}</Header>
            <List inverted divided relaxed >
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_1')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_1')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_2')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_2')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_3')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_3')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_4')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_4')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_5')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_5')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_6')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_6')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_7')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_7')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_8')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_8')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_9')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_9')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_10')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_10')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_11')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_11')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_12')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_12')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_13')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_13')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_14')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_14')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_15')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_15')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_16')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_16')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_17')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_17')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_18')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_18')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_19')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_19')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_1_DATEANDVENUE_20')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_1_TITLE_20')}`}/>
            </List>

            {/* Vorträgen auf Einladung wissenschaftlicher Organisationen*/}
            <Header color='blue' inverted as='h2'>{t('de', 'LECTURES', 'LECTURES_2_TITLE')}</Header>
            <List inverted divided relaxed >
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_1')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_1')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_2')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_2')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_3')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_3')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_4')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_4')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_5')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_5')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_6')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_6')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_7')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_7')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_8')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_8')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_9')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_9')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_10')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_10')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_11')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_11')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_12')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_12')}`}/>
              <ListItem header={`${t('de', 'LECTURES', 'LECTURES_2_DATEANDVENUE_13')}`} metaText={`${t('de', 'LECTURES', 'LECTURES_2_TITLE_13')}`}/>
            </List>

            {/* Wissenschaftsjournalistische und andere Artikel */}
            <Header color='blue' inverted as='h2'>{t('de', 'LECTURES', 'LECTURES_3_TITLE')}</Header>
            <List>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_1')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_1')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_2')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_2')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_3')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_3')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_4')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_4')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_5')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_5')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_6')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_6')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_7')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_7')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_8')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_8')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_9')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_9')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_10')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_10')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_3_AUTHOR_11')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_3_TITLE_11')}
                </List.Item>
            </List>

            {/* Tagungsberichte und Rezensionen */}
            
            <h2>{t('de', 'LECTURES', 'LECTURES_4_TITLE')}</h2>
            <List>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_4_AUTHOR_1')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_4_TITLE_1')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_4_AUTHOR_2')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_4_TITLE_2')}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t('de', 'LECTURES', 'LECTURES_4_AUTHOR_3')} 
                  </List.Header>
                  {t('de', 'LECTURES', 'LECTURES_4_TITLE_3')}
                </List.Item>
            </List>

        </Container>
    )
}
