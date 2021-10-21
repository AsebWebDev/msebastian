import React from 'react';
import { List } from "semantic-ui-react";
import { dict } from '../../utilities/translation';
import "./ListItem.scss";

function ListItem({ header, link, metaText, dark }) {
  return (
    <List.Item id="list-item">
      <List.Icon
        size="small"
        name={link ? "globe" : "circle"}
        verticalAlign="middle"
      />
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
                <strong>{dict.de.MISC.LINK}</strong>
              </a>
            </>
          )}
        </List.Description>
      </List.Content>
    </List.Item>
  );
}

export default ListItem;
