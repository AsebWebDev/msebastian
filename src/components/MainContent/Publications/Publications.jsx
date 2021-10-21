import React, { useContext } from "react";
import { Container, Header, List } from "semantic-ui-react";
import ListItem from "../ListItem";
import { dict } from "../../../utilities/translation";
import { LanguageContext } from "../../../App";
import "./Publications.scss";

export default function Publications() {
  const lang = useContext(LanguageContext);

  return (
    <Container text id="publications">
      <Header inverted as="h1">
        {dict[lang].PUBLICATIONS.PUBLICATIONS_TITLE}
      </Header>

      {/* Artikel in Fachzeitschriften */}

      <Header color="blue" inverted as="h2">
        {dict[lang].PUBLICATIONS.PUBLICATIONS_1_HEADER}
      </Header>
      <List inverted divided relaxed>
        {dict[lang].PUBLICATIONS.PUBLICATIONS_1_ITEMS.map(
          (publication) => (
            <ListItem
              header={publication.author}
              link={publication.link}
              metaText={publication.title}
            />
          )
        )}
      </List>

      {/* Artikel in Begutachtung */}

      <Header color="blue" inverted as="h2">
        {dict[lang].PUBLICATIONS.PUBLICATIONS_2_HEADER}
      </Header>
      <List inverted divided relaxed>
        {dict[lang].PUBLICATIONS.PUBLICATIONS_2_ITEMS.map(
          (publication) => (
            <ListItem
              header={publication.author}
              link={publication.link}
              metaText={publication.title}
            />
          )
        )}
      </List>

      {/* Artikel in wissenschaftlichen Sammelbänden */}
      <Header color="blue" inverted as="h2">
        {dict[lang].PUBLICATIONS.PUBLICATIONS_3_HEADER}
      </Header>
      <List inverted divided relaxed>
        {dict[lang].PUBLICATIONS.PUBLICATIONS_3_ITEMS.map(
          (publication) => (
            <ListItem
              header={publication.author}
              link={publication.link}
              metaText={publication.title}
            />
          )
        )}
      </List>

      {/* Wissenschaftsjournalistische und andere Artikel */}
      <Header color="blue" inverted as="h2">
        {dict[lang].PUBLICATIONS.PUBLICATIONS_4_HEADER}
      </Header>
      <List inverted divided relaxed>
        {dict[lang].PUBLICATIONS.PUBLICATIONS_4_ITEMS.map(
          (publication) => (
            <ListItem
              header={publication.author}
              link={publication.link}
              metaText={publication.title}
            />
          )
        )}
      </List>

      {/* Tagungsberichte und Rezensionen */}
      <Header color="blue" inverted as="h2">
        {dict[lang].PUBLICATIONS.PUBLICATIONS_5_HEADER}
      </Header>
      <List inverted divided relaxed>
        {dict[lang].PUBLICATIONS.PUBLICATIONS_5_ITEMS.map(
          (publication) => (
            <ListItem
              header={publication.author}
              link={publication.link}
              metaText={publication.title}
            />
          )
        )}
      </List>
    </Container>
  );
}
