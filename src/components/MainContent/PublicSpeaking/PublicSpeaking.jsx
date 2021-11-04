import React, { useContext } from "react";
import { Container, Header } from "semantic-ui-react";
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
    </Container>
  );
}
