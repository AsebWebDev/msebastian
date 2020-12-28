import React from "react";
import { List, Header } from "semantic-ui-react";
import t from "../../../utilities/translation";

const dot = <List.Icon name='dot circle' />

export default function CV() {
  return (
    <>
      <h1>Curriculum Vitae</h1>
      <List>
        <List.Item>
          <List.Header>
            {t("de", "CV_5_DATE")} - {t("de", "CV_5_TITLE")}
          </List.Header>
          {t("de", "CV_5")}
        </List.Item>
        <List.Item>
          <List.Header>
            {t("de", "CV_4_DATE")} - {t("de", "CV_4_TITLE")}
          </List.Header>
        </List.Item>
        <List.Item>
          <List.Header>
            {t("de", "CV_3_DATE")} - {t("de", "CV_3_TITLE")}
          </List.Header>
        </List.Item>
        <List.Item>
          <List.Header>
            {t("de", "CV_2_DATE")} - {t("de", "CV_2_TITLE")}
          </List.Header>
        </List.Item>
        <List.Item>
          <List.Header>
            {t("de", "CV_1_DATE")} - {t("de", "CV_1_TITLE")}
          </List.Header>
          {t("de", "CV_1")}
        </List.Item>
      </List>

      <Header as="h2">{t("de", "MEMBERSHIP_TITLE")}</Header>
      <List>
        <List.Item>{dot}{t("de", "MEMBERSHIP_5")}</List.Item>
        <List.Item>{dot}{t("de", "MEMBERSHIP_4")}</List.Item>
        <List.Item>{dot}{t("de", "MEMBERSHIP_3")}</List.Item>
        <List.Item>{dot}{t("de", "MEMBERSHIP_2")}</List.Item>
        <List.Item>{dot}{t("de", "MEMBERSHIP_1")}</List.Item>
      </List>

      <Header as="h2">{t("de", "EXPERT_OPINION_TITLE")}</Header>
      <List>
        <List.Item>{dot}{t("de", "EXPERT_OPINION_3")}</List.Item>
        <List.Item>{dot}{t("de", "EXPERT_OPINION_2")}</List.Item>
        <List.Item>{dot}{t("de", "EXPERT_OPINION_1")}</List.Item>
      </List>
    </>
  );
}
