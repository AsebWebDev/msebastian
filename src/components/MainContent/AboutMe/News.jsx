import React, {useContext} from 'react';
import { Header, List } from "semantic-ui-react";
import t from "../../../translations";
import { dict } from "../../../translations";
import { LanguageContext } from '../../../App';


export default function CV() {
  const lang = useContext(LanguageContext);

  return (
    <>
      <Header color="blue" as="h1">
        {t(lang, "NEWS", "NEWS_TITLE")}
      </Header>
      <List divided relaxed>
        {dict[lang].NEWS.ITEMS.map((news) => (
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
                ><strong>{dict[lang].MISC.LINK}</strong></a>
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </>
  );
}
