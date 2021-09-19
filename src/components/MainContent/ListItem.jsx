import { List } from "semantic-ui-react";
import "./ListItem.scss";

function ListItem({ header, link, metaText, dark }) {
  return (
    <List.Item id="list-item">
      <List.Icon
        size="mini"
        name="circle"
        verticalAlign="middle"
      />
      <List.Content>
        <List.Header>{header}</List.Header>
        <List.Description
          as={link ? 'a' : 'span'}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={dark ? "" : "list-description"}
        >
          {metaText}
        </List.Description>
      </List.Content>
    </List.Item>
  );
}

export default ListItem;
