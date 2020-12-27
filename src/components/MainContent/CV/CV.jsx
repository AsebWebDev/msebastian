import React from "react";
import { Container, Header } from "semantic-ui-react";
import cvText from '../../../texts/cv'
import "./CV.scss";

export default function CV() {
  return (
    <Container text id="cv">
      <Header as='h1'>Curriculum Vitae</Header>
      <p>{cvText}</p>
    </Container>
  );
}
