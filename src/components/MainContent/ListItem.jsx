import React, { useContext } from "react";
import { List } from "semantic-ui-react";
import { dict } from "../../translations";
import { LanguageContext } from "../../App";

import "./ListItem.scss";

function ListItem({ withBullets=true, header, link, metaText, dark }) {
  const lang = useContext(LanguageContext);
  return (
    <List.Item id="list-item">
      {withBullets && <List.Icon
        size="small"
        name={link ? "globe" : "circle"}
        verticalAlign="middle"
      />}
      <List.Content>
        <List.Header>{header}</List.Header>
        <List.Description
          className={dark ? "" : "list-description"}
        >
          {metaText}{" "}
          {link && (
            <>
              <br />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>{dict[lang].MISC.LINK}</strong>
              </a>
            </>
          )}
        </List.Description>
      </List.Content>
    </List.Item>
  );
}

export default ListItem;
