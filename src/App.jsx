import { useLocation } from 'react-router-dom'
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import t from './utilities/translation';
import './App.scss'
import MainContent from './components/MainContent/MainContent';
function App() {
  console.log(useLocation().pathname)
  return (
    <Grid columns={1} id='App'>
        <Grid.Column>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            direction='top'
            visible={true}
            width='thin'
          >
            <div>
              <Menu.Item as='a' href='/'>
                <Icon name='home' />
              </Menu.Item>
            </div>
            <div>
            {useLocation().pathname !== '/' && <Header id='header1' as='h1'>Dr. Marcel Sebastian</Header>}
            </div>
          </Sidebar>
        </Grid.Column>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              icon='labeled'
              inverted
              vertical
              visible={true}
              width='thin'
            >
              <Menu.Item as='a' href='/aboutme'>
                <Icon name='info circle' />
                {t('de', 'ABOUT_ME', 'ABOUT_ME_TITLE')}
              </Menu.Item>
              <Menu.Item as='a' href='/publications'>
                <Icon name='book' />
                {t('de', 'PUBLICATIONS', 'PUBLICATIONS_TITLE')}
              </Menu.Item>
              <Menu.Item as='a' href='/lectures'>
                <Icon name='star' />
                {t('de', 'LECTURES', 'LECTURES_TITLE')}
              </Menu.Item>
              {/* TODO: FOR SECOND RELEASE */}
              {/* <Menu.Item as='a' href='/press'>
                <Icon name='star' />
                {t('de', 'PRESS_TITLE')}
              </Menu.Item> */}
              {/* TODO: FOR SECOND RELEASE */}
              {/* <Menu.Item as='a' href='/workshopsandcounselling'>
                <Icon name='star' />
                {t('de', 'WORKSHOPANDCOUNSELLING_TITLE')}
              </Menu.Item> */}
            </Sidebar>

            <Sidebar.Pusher >
                <MainContent />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
    </Grid>
  );
}

export default App;
