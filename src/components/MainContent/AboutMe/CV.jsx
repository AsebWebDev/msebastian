import { Header, List } from "semantic-ui-react";
import t from "../../../utilities/translation";
import ListItem from '../ListItem'
import { dict } from '../../../utilities/translation';

export default function CV() {
  return (
    <div className="cv">
      <Header color='blue' as='h1'>{t('de', 'CV', 'CV_TITLE')}</Header>
        <List divided relaxed>
          {dict.de.CV.ITEMS.map(CVItem => <ListItem header={`${CVItem.date} - ${CVItem.title}`} dark={true} metaText={`${CVItem.text}`}/>)}
        </List>
      <Header color='blue' as="h2">{dict.de.MEMBERSHIP.MEMBERSHIP_TITLE}</Header>
      <List>
        {dict.de.MEMBERSHIP.ITEMS.map(membership => <ListItem header={`${membership.title}`}/>)}
      </List>

      <Header color='blue' as="h2">{dict.de.EXPERT_OPINION.EXPERT_OPINION_TITLE}</Header>
      <List>
        {dict.de.EXPERT_OPINION.ITEMS.map(expertOpinion => <ListItem header={`${expertOpinion.title}`}/>)}
      </List>
    </div>
  );
}
