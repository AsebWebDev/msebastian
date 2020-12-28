import React, { useState } from 'react';
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import './App.scss'
import MainContent from './components/MainContent/MainContent';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <Grid columns={1} id="App">
      {/* <Sticky > */}
        <Grid.Column>
          <Sidebar
            as={Menu}
            animation="push"
            icon='labeled'
            inverted
            direction="top"
            visible={true}
            width='thin'
          >
            <div onClick={() => setSidebarVisible(!sidebarVisible)}>
              <Menu.Item as='a'>
                <Icon name='home' />
                Home
              </Menu.Item>
            </div>
            <div flex >
            <Header id="header1" as='h1'>Dr. Marcel Sebastian</Header>
            <Header id="header2" as='h3'>Soziologe – Autor – Public Speaker</Header>
            </div>
          </Sidebar>
        </Grid.Column>
      {/* </Sticky> */}
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={() => setSidebarVisible(false)}
              vertical
              visible={sidebarVisible}
              width='thin'
            >
              <Menu.Item as='a' href="/aboutme">
                <Icon name='info circle' />
                Über mich
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='book' />
                Publikationen
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='star' />
                Auftritte
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarVisible}>
                <MainContent />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
    </Grid>
  );
}

export default App;
