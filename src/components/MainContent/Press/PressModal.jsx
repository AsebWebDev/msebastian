import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Header,
  Icon,
  Menu,
  Modal,
} from "semantic-ui-react";
import t from "../../../translations";
import { LanguageContext } from "../../../App";

function PressModal() {
  const lang = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const handleConfirm = () => {
    setOpen(false);
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Menu.Item>
          <Icon name="newspaper" />
          {t(lang, "PRESS", "PRESS_TITLE")}
        </Menu.Item>
      }
    >
      <Modal.Header>
        {t(lang, "PRESS", "PRESS_MODAL_TITLE")}
      </Modal.Header>
      <Modal.Content image>
        <Icon name="wordpress forms" size="massive" />
        <Modal.Description>
          <Header>
            {t(lang, "PRESS", "PRESS_MODAL_HEADER")}
          </Header>
          {/* <p>{t(lang, 'PRESS', 'PRESS_MODAL_DESCRIPTION')}</p> */}
          <p>{t(lang, "PRESS", "PRESS_MODAL_QUESTION")}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content={t(lang, "PRESS", "PRESS_MODAL_DENY")}
          color="black"
          onClick={() => setOpen(false)}
        />
        <Link
          className="download-link"
          to="Presseliste.pdf"
          target="_blank"
          download
        >
          <Button
            content={t(
              lang,
              "PRESS",
              "PRESS_MODAL_CONFIRM"
            )}
            labelPosition="right"
            icon="checkmark"
            onClick={handleConfirm}
            positive
          />
        </Link>
      </Modal.Actions>
    </Modal>
  );
}

export default PressModal;
