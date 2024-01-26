import React, { useContext } from "react";
import { Container, Header, List } from "semantic-ui-react";
import ListItem from "../ListItem";
import { dict } from "../../../translations";
import { LanguageContext } from "../../../App";
import { isMobile } from "../../../utilities/helpers";
import "./Publications.scss";

export default function Publications() {
  const lang = useContext(LanguageContext);
  const inverted = !isMobile();

  return (
    <Container text id="publications">
      <Header inverted={inverted} as="h1">
        {dict[lang].PUBLICATIONS.PUBLICATIONS_TITLE}
      </Header>

      <Header color="black" inverted={inverted} as="h2">
        {dict[lang].PUBLICATIONS.LINK_TEXT_PART1}{" "}
        <a href="https://us.sowi.tu-dortmund.de/professur/team/dr-marcel-sebastian/%5D">
          {dict[lang].PUBLICATIONS.LINK_TEXT_PART2}
        </a>{" "}
        {dict[lang].PUBLICATIONS.LINK_TEXT_PART3}{" "}
        <a href="https://scholar.google.de/citations?user=nqLWm3EAAAAJ&hl=de%5D">
          {dict[lang].PUBLICATIONS.LINK_TEXT_PART4}{" "}
        </a>
        .
      </Header>
    </Container>
  );
}
