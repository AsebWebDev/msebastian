import React, { useContext } from "react";
import { Header, List } from "semantic-ui-react";
import t from "../../../translations";
import ListItem from "../ListItem";
import { dict } from "../../../translations";
import { LanguageContext } from "../../../App";

export default function CV() {
  const lang = useContext(LanguageContext);

  return (
    <div className="cv">
      <Header color="blue" as="h1">
        {t(lang, "CV", "CV_TITLE")}
      </Header>
      <List divided relaxed>
        {dict[lang].CV.ITEMS.map((CVItem, i) => (
          <ListItem
            key={i} // TODO: add proper key to avoid using index
            header={`${CVItem.date} - ${CVItem.title}`}
            dark
            metaText={`${CVItem.text}`}
          />
        ))}
      </List>
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
    </div>
  );
}
