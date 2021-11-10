import React from "react";
import {
    Checkbox,
    Label,
  } from "semantic-ui-react";
import './LanguageSwitcher.scss'

function LanguageSwitcher({checked, onChange}) {
  return (
    <div className="language-switch">
      <Label>DE</Label>
      <Checkbox toggle onChange={onChange} checked={checked} />
      <Label>EN</Label>
    </div>
  );
}

export default LanguageSwitcher;
