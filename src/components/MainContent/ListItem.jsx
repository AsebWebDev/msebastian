import { List } from "semantic-ui-react";
import './ListItem.scss'

function ListItem({header, metaText, dark}) {
    return (
        <List.Item id="list-item">
          <List.Icon size="mini" name='circle' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>{header}</List.Header>
            <List.Description as='a'className={dark ? '' : "list-description"}>{metaText}</List.Description>
          </List.Content>
        </List.Item>
    )
}

export default ListItem
