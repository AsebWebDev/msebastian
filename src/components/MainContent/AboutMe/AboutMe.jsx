import React, { useContext } from "react";
import t from "../../../translations";
import { Card, Image } from "semantic-ui-react";
import { LanguageContext } from "../../../App";;

export default function AboutMe() {
  const lang = useContext(LanguageContext);

  return (
    <Card id="aboutme">
      <Image
        src="portrait1.jpg"
        size="medium"
        alt="portrait of Dr. Sebastian"
      />
      <Card.Content>
        <Card.Header>Dr. Marcel Sebastian</Card.Header>
        <Card.Description>
          <h1>{t(lang, "ABOUT_ME", "ABOUT_ME_TITLE")}</h1>
          <p>{t(lang, "ABOUT_ME", "ABOUT_ME_SUMMARY")}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
