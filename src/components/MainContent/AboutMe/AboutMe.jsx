import React from 'react';
import t from '../../../utilities/translation'
import { Card, Image } from 'semantic-ui-react'

export default function AboutMe() {
    return (
            <Card>
                <Image src="portrait1.jpg" size='medium' alt="portrait of Dr. Sebastian"/>
                <Card.Content>
                    <Card.Header>Dr. Marcel Sebastian</Card.Header>
                    {/* <Card.Meta>
                        <span className='date'>anno 1984</span>
                    </Card.Meta> */}
                    <Card.Description>
                        <h1>{t('de', 'ABOUT_ME', 'ABOUT_ME_TITLE')}</h1>
                        <p>{t('de', 'ABOUT_ME', 'ABOUT_ME_SUMMARY')}</p>
                    </Card.Description>
                </Card.Content>
            </Card>
    )
}
