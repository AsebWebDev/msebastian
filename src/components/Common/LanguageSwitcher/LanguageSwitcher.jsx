import React from "react";
import {
    Checkbox,
    Flag,
  } from "semantic-ui-react";
import './LanguageSwitcher.scss'

function LanguageSwitcher({checked, onChange}) {
  return (
    <div className="language-switch">
      <Flag name="de" />
      <Checkbox
        toggle
        onChange={onChange}
        checked={checked}
      />
      <Flag name="us" />
    </div>
  );
}

export default LanguageSwitcher;
