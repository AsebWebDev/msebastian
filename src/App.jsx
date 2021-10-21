import React from 'react';
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
import PressModal from './components/MainContent/Press/PressModal';

function App() {
  return (
    <Grid columns={1} id='App'>
        <Grid.Column>
          <Sidebar
            as={Menu}
            animation='push'
            className="page-header"
            direction='top'
            icon='labeled'
            inverted
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
            <div className="email"><Icon name='mail' size="big"/><a href= "mailto:kontakt@marcelsebastian.de">kontakt@marcelsebastian.de</a></div>
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
              <PressModal />
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
