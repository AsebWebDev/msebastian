import React from "react";
import { Container, Header } from "semantic-ui-react";
import cvText from '../../../texts/cv'
import "./AboutMe.scss";

export default function CV() {
  return (
    <Container text id="aboutme">
      <Header as='h1'>Curriculum Vitae</Header>
      <p>{cvText}</p>
    </Container>
  );
}
