import React from "react";
import { Header as Headline, Icon } from "semantic-ui-react";

function Header() {
  return (
    <>
      <div>
        <Headline id="header1" as="h1">
          Dr. Marcel Sebastian
        </Headline>
      </div>
      <div className="email">
        <Icon name="mail" size="big" />
        <a href="mailto:kontakt@marcelsebastian.de">
          kontakt@marcelsebastian.de
        </a>
      </div>
    </>
  );
}

export default Header;
