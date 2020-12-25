import React, { useState } from 'react';
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Sticky,
} from 'semantic-ui-react'
import './App.scss'

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (

    <Grid columns={1}>
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
            <Header id="header" as='h1'>Dr. Marcel Sebastian</Header>
          </Sidebar>
          <p>test</p>
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
              <Menu.Item as='a'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarVisible}>
                <div id="main">Main</div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
    </Grid>
  );
}

export default App;
