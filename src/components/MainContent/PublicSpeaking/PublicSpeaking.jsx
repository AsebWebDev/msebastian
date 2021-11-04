import React, { useContext } from "react";
import { Container, Header, List } from "semantic-ui-react";
import ListItem from "../ListItem";

import { dict } from "../../../translations";
import { LanguageContext } from "../../../App";
import "./PublicSpeaking.scss";

export default function PublicSpeaking() {
  const lang = useContext(LanguageContext);

  return (
    <Container text id="publicspeaking">
      <Header inverted as="h1">
        {dict[lang].PUBLICSPEAKING.PUBLICSPEAKING_TITLE}
      </Header>  

      {/* Public Speaking */}

      <Header color="blue" inverted as="h2">
        {
          dict[lang].PUBLICSPEAKING
            .PUBLICSPEAKING_1_HEADER
        }
      </Header>
      <List inverted divided relaxed>
        {dict[
          lang
        ].PUBLICSPEAKING.PUBLICSPEAKING_1_ITEMS.map(
          (ps) => (
            <ListItem
              withBullets={false}
              header={ps.title}
              metaText={ps.text}
            />
          )
        )}
      </List>
    </Container>
  );
}
