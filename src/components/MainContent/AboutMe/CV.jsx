import { Header, List } from "semantic-ui-react";
import t from "../../../utilities/translation";
import ListItem from '../ListItem'

export default function CV() {
  return (
    <div className="cv">
      <Header as='h1'>{t('de', 'CV', 'CV_TITLE')}</Header>
      <List divided relaxed>
        <ListItem header={`${t("de", "CV", "CV_5_DATE")} - ${t("de", "CV", "CV_5_TITLE")}`} dark={true} metaText={`${t("de", "CV", "CV_5")}`}/>
        <ListItem header={`${t("de", "CV", "CV_4_DATE")} - ${t("de", "CV", "CV_4_TITLE")}`} dark={true} metaText={`${t("de", "CV", "CV_4")}`}/>
        <ListItem header={`${t("de", "CV", "CV_3_DATE")} - ${t("de", "CV", "CV_3_TITLE")}`} dark={true} metaText={`${t("de", "CV", "CV_3")}`}/>
        <ListItem header={`${t("de", "CV", "CV_2_DATE")} - ${t("de", "CV", "CV_2_TITLE")}`} dark={true} metaText={`${t("de", "CV", "CV_2")}`}/>
        <ListItem header={`${t("de", "CV", "CV_1_DATE")} - ${t("de", "CV", "CV_1_TITLE")}`} dark={true} metaText={`${t("de", "CV", "CV_1")}`}/>
      </List>

      <Header as="h2">{t("de", "MEMBERSHIP", "MEMBERSHIP_TITLE")}</Header>
      <List>
        <ListItem header={`${t("de", "MEMBERSHIP", "MEMBERSHIP_5")}`}/>
        <ListItem header={`${t("de", "MEMBERSHIP", "MEMBERSHIP_4")}`}/>
        <ListItem header={`${t("de", "MEMBERSHIP", "MEMBERSHIP_3")}`}/>
        <ListItem header={`${t("de", "MEMBERSHIP", "MEMBERSHIP_2")}`}/>
        <ListItem header={`${t("de", "MEMBERSHIP", "MEMBERSHIP_1")}`}/>
      </List>

      <Header as="h2">{t("de", "EXPERT_OPINION", "EXPERT_OPINION_TITLE")}</Header>
      <List>
        <ListItem header={`${t("de", "EXPERT_OPINION", "EXPERT_OPINION_3")}`}/>
        <ListItem header={`${t("de", "EXPERT_OPINION", "EXPERT_OPINION_2")}`}/>
        <ListItem header={`${t("de", "EXPERT_OPINION", "EXPERT_OPINION_1")}`}/>
      </List>
    </div>
  );
}
