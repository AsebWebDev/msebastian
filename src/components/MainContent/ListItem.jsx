import React, { useContext } from "react";
import { List } from "semantic-ui-react";
import { dict } from "../../translations";
import { LanguageContext } from "../../App";

import "./ListItem.scss";

function ListItem({
  withBullets = true,
  header,
  link,
  metaText,
  dark = false,
}) {
  const lang = useContext(LanguageContext);
  const linkIsDownload = link?.endsWith(".pdf");
  const linkText = linkIsDownload ? "LINKTOFILE" : "LINKTOARTICLE";
  return (
    <List.Item id="list-item">
      {withBullets && (
        <List.Icon
          size="small"
          name={link ? "globe" : "circle"}
          verticalAlign="middle"
        />
      )}
      <List.Content>
        <List.Header>{header}</List.Header>
        <List.Description
          className={
            dark === true && dark !== undefined ? "" : "list-description"
          }
        >
          {metaText}{" "}
          {link && (
            <>
              <br />
              <a
                href={link}
                download={linkIsDownload}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>{dict[lang].MISC[linkText]}</strong>
              </a>
            </>
          )}
        </List.Description>
      </List.Content>
    </List.Item>
  );
}

export default ListItem;
