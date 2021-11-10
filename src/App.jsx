import React, { useState } from "react";
import {
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import t from "./translations";
import "./App.scss";
import MainContent from "./components/MainContent/MainContent";
import PressModal from "./components/MainContent/Press/PressModal";
import Header from "./components/Common/Header/Header";
import { languages } from "./translations/";
import { isMobile as checkIsMobile } from './utilities/helpers'
import LanguageSwitcher from "./components/Common/LanguageSwitcher/LanguageSwitcher";
const LanguageContext = React.createContext({languages});

function App() {
  const localStorageLanguage = localStorage.getItem('languageCode');
  const [lang, setLang] = useState(localStorageLanguage ?? languages.de);
  const isMobile = checkIsMobile();
  const [menuIsVisible, setMenuIsVisible] = useState(!checkIsMobile());
  const showHeader = !isMobile;

  if (localStorageLanguage === undefined || localStorageLanguage !== lang) localStorage.setItem("languageCode", lang)

  const toggleLanguage = () => {
    setLang(
      lang === languages.de ? languages.en : languages.de
    );
  };

  return (
    <LanguageContext.Provider value={lang}>
      <Grid columns={1} id="App">
        <Grid.Column>
          <Sidebar
            as={Menu}
            className="page-header"
            direction="top"
            icon="labeled"
            inverted
            visible={true}
            width="thin"
          >
            <div>
              {isMobile 
                ? <Menu.Item>
                    <Icon name="bars" onClick={() => setMenuIsVisible(!menuIsVisible)}/>
                  </Menu.Item>
                : <Menu.Item as="a" href="/">
                    <Icon name="home" />
                  </Menu.Item>
              }
            </div>
            {showHeader && <Header />}
            <LanguageSwitcher onChange={toggleLanguage} checked={lang === 'en'}/>
          </Sidebar>
        </Grid.Column>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation={isMobile ? "overlay" : "push"}
              icon="labeled"
              inverted
              vertical
              visible={menuIsVisible}
              width="thin"
            >
              <Menu.Item as="a" href="/aboutme">
                <Icon name="info circle" />
                {t(lang, "ABOUT_ME", "ABOUT_ME_TITLE")}
              </Menu.Item>
              <Menu.Item as="a" href="/publications">
                <Icon name="book" />
                {t(
                  lang,
                  "PUBLICATIONS",
                  "PUBLICATIONS_TITLE"
                )}
              </Menu.Item>
              <Menu.Item as="a" href="/lectures">
                <Icon name="lightbulb" />
                {t(lang, "LECTURES", "LECTURES_TITLE")}
              </Menu.Item>
              <PressModal />
              <Menu.Item as='a' href='/workshopsandcounselling'>
                <Icon name='users' />
                {t(lang, "WORKSHOPANDCOUNSELLING", "WORKSHOPANDCOUNSELLING_TITLE")}
              </Menu.Item>
              <Menu.Item as='a' href='/publicspeaking'>
                <Icon name='comment outline' />
                {t(lang, "PUBLICSPEAKING", "PUBLICSPEAKING_TITLE")}
              </Menu.Item>
              {isMobile && <Menu.Item as="a" href="mailto:kontakt@marcelsebastian.de">
                <Icon name="mail" size="big" />
                {t(lang, "MISC", "CONTACT")}
              </Menu.Item>}
            </Sidebar>

            <Sidebar.Pusher>
              <MainContent />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </LanguageContext.Provider>
  );
}

export { LanguageContext };

export default App;
