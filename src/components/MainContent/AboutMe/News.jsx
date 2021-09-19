import { Header, List } from "semantic-ui-react";
import t from "../../../utilities/translation";
import { dict } from "../../../utilities/translation";

export default function CV() {
  return (
    <>
      <Header color="blue" as="h1">
        {t("de", "NEWS", "NEWS_TITLE")}
      </Header>
      <List divided relaxed>
        {dict.de.NEWS.ITEMS.map((news) => (
          <List.Item dark={true}>
            <List.Icon
              name="globe"
              size="large"
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header>
                  {news.date}
              </List.Header>
              <List.Description>
                {news.title}
                <br />
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                ><strong>Link zum Artikel</strong></a>
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </>
  );
}
