import React from "react";
import { Container } from "semantic-ui-react";
import AboutMe from './AboutMe'
import CV from './CV'
import "./Index.scss";

export default function Index() {
  return (
    <Container text id="aboutme-index">
      <AboutMe />
      <CV />
    </Container>
  );
}
