import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Menu, Modal } from 'semantic-ui-react'
import t from '../../../utilities/translation.js';

function PressModal() {
  const [open, setOpen] = useState(false)
  const handleConfirm = () => {
    setOpen(false)
  }
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Menu.Item>
          <Icon name='star' />
          {t('de', 'PRESS', 'PRESS_TITLE')}
        </Menu.Item>
      }
    >
      <Modal.Header>{t('de', 'PRESS', 'PRESS_MODAL_TITLE')}</Modal.Header>
      <Modal.Content image>
        {/* <Image size='medium' src='/images/avatar/large/rachel.png' wrapped /> */}
        <Icon name='wordpress forms' size="massive"/>
        <Modal.Description>
          <Header>{t('de', 'PRESS', 'PRESS_MODAL_HEADER')}</Header>
          <p>{t('de', 'PRESS', 'PRESS_MODAL_DESCRIPTION')}</p>
          <p>{t('de', 'PRESS', 'PRESS_MODAL_QUESTION')}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button 
          content={t('de', 'PRESS', 'PRESS_MODAL_DENY')} 
          color='black' 
          onClick={() => setOpen(false)} 
        />
        <Link className='download-link' to='Presseliste.pdf' target="_blank" download>
        <Button
          content={t('de', 'PRESS', 'PRESS_MODAL_CONFIRM')}
          labelPosition='right'
          icon='checkmark'
          onClick={handleConfirm}
          positive
        />
        </Link>
          
      </Modal.Actions>
    </Modal>
  )
}

export default PressModal