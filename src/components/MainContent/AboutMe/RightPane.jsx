import React, { useContext } from "react";
import { Header, List } from "semantic-ui-react";
import { dict } from "../../../translations";
import { LanguageContext } from "../../../App";
import ListItem from "../ListItem";

export default function RightPane() {
  const lang = useContext(LanguageContext);

  return (
    <>
      <Header color="blue" as="h2">
        {dict[lang].MEMBERSHIP.MEMBERSHIP_TITLE}
      </Header>
      <List>
        {dict[lang].MEMBERSHIP.ITEMS.map((membership, i) => (
          <ListItem
            key={i} // TODO: add proper key to avoid using index
            header={`${membership.title}`}
          />
        ))}
      </List>

      <Header color="blue" as="h2">
        {dict[lang].EXPERT_OPINION.EXPERT_OPINION_TITLE}
      </Header>
      <List>
        {dict[lang].EXPERT_OPINION.ITEMS.map((expertOpinion, i) => (
          <ListItem
            key={i} // TODO: add proper key to avoid using index
            header={`${expertOpinion.title}`}
          />
        ))}
      </List>
    </>
  );
}
