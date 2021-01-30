import { Container, Header, List } from "semantic-ui-react";
// import t from '../../../utilities/translation'
import t from '../../../utilities/translation'
import './Publications.scss'

export default function Publications() {
    return (
        <Container text id="publications">
            <Header as='h1'>{t('de', 'PUBLICATIONS_HEADER')}</Header>
            
            {/* Artikel in Fachzeitschriften */}

            <h2>{t('de', 'PUBLICATIONS_1_TITLE')}</h2>
            <List>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_1_AUTHOR_1")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_1_TITLE_1")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_1_AUTHOR_2")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_1_TITLE_2")}
                </List.Item>
            </List>

            {/* Artikel in wissenschaftlichen Sammelbänden */}
            
            <h2>{t('de', 'PUBLICATIONS_2_TITLE')}</h2>
            <List>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_1")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_1")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_2")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_2")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_3")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_3")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_4")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_4")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_5")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_5")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_6")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_6")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_7")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_7")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_8")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_8")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_9")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_9")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_2_AUTHOR_10")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_2_TITLE_10")}
                </List.Item>
            </List>

            {/* Wissenschaftsjournalistische und andere Artikel */}
            
            <h2>{t('de', 'PUBLICATIONS_3_TITLE')}</h2>
            <List>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_1")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_1")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_2")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_2")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_3")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_3")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_4")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_4")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_5")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_5")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_6")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_6")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_7")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_7")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_8")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_8")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_9")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_9")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_10")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_10")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_3_AUTHOR_11")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_3_TITLE_11")}
                </List.Item>
            </List>

            {/* Tagungsberichte und Rezensionen */}
            
            <h2>{t('de', 'PUBLICATIONS_4_TITLE')}</h2>
            <List>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_4_AUTHOR_1")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_4_TITLE_1")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_4_AUTHOR_2")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_4_TITLE_2")}
                </List.Item>
                <List.Item>
                  <List.Header>
                      {t("de", "PUBLICATIONS_4_AUTHOR_3")} 
                  </List.Header>
                  {t("de", "PUBLICATIONS_4_TITLE_3")}
                </List.Item>
            </List>

        </Container>
        
    )
}
