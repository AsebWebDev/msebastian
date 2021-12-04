import React, { useContext } from "react";
import { Container, Header, List } from "semantic-ui-react";
import ListItem from "../ListItem";
import { dict } from "../../../translations";
import { LanguageContext } from "../../../App";
import "./WorkshopsAndCounselling.scss";

export default function WorkshopsAndCounselling() {
  const lang = useContext(LanguageContext);

  return (
    <Container text id="ws">
      <Header inverted as="h1">
        {
          dict[lang].WORKSHOPANDCOUNSELLING
            .WORKSHOPANDCOUNSELLING_TITLE
        }
      </Header>

      {/* Wissenschaftliche Beratung */}

      <Header color="blue" inverted as="h2">
        {
          dict[lang].WORKSHOPANDCOUNSELLING
            .WORKSHOPANDCOUNSELLING_1_HEADER
        }
      </Header>
      <List inverted divided relaxed>
        {dict[
          lang
        ].WORKSHOPANDCOUNSELLING.WORKSHOPANDCOUNSELLING_1_ITEMS.map(
          (ws) => (
            <ListItem
              withBullets={false}
              header={ws.title}
              link={ws.link}
              metaText={ws.reference}
            />
          )
        )}
      </List>

      {/* Workshops */}

      <Header color="blue" inverted as="h2">
        {
          dict[lang].WORKSHOPANDCOUNSELLING
            .WORKSHOPANDCOUNSELLING_2_HEADER
        }
      </Header>
      <List inverted divided relaxed>
        {dict[
          lang
        ].WORKSHOPANDCOUNSELLING.WORKSHOPANDCOUNSELLING_2_ITEMS.map(
          (ws) => (
            <ListItem
              withBullets={false}
              header={ws.title}
              link={ws.link}
              metaText={ws.text}
            />
          )
        )}
      </List>
    </Container>
  );
}
