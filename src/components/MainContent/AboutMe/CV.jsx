import React, { useContext } from "react";
import { Header, List } from "semantic-ui-react";
import t from "../../../utilities/translation";
import ListItem from "../ListItem";
import { dict } from "../../../utilities/translation";
import { LanguageContext } from "../../../App";

export default function CV() {
  const lang = useContext(LanguageContext);

  return (
    <div className="cv">
      <Header color="blue" as="h1">
        {t(lang, "CV", "CV_TITLE")}
      </Header>
      <List divided relaxed>
        {dict[lang].CV.ITEMS.map((CVItem) => (
          <ListItem
            header={`${CVItem.date} - ${CVItem.title}`}
            dark={true}
            metaText={`${CVItem.text}`}
          />
        ))}
      </List>
      <Header color="blue" as="h2">
        {dict[lang].MEMBERSHIP.MEMBERSHIP_TITLE}
      </Header>
      <List>
        {dict[lang].MEMBERSHIP.ITEMS.map((membership) => (
          <ListItem header={`${membership.title}`} />
        ))}
      </List>

      <Header color="blue" as="h2">
        {dict[lang].EXPERT_OPINION.EXPERT_OPINION_TITLE}
      </Header>
      <List>
        {dict[lang].EXPERT_OPINION.ITEMS.map(
          (expertOpinion) => (
            <ListItem header={`${expertOpinion.title}`} />
          )
        )}
      </List>
    </div>
  );
}
