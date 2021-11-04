import React, { useContext }  from 'react'
import { Container, Header } from "semantic-ui-react";
import { dict } from "../../../utilities/translation";
import { LanguageContext } from "../../../App";
import './WorkshopsAndCounselling.scss'

export default function WorkshopsAndCounselling() {
    const lang = useContext(LanguageContext);

    return (
        <Container text id="ws">
            <Header inverted as='h1'>
                {dict[lang].WORKSHOPANDCOUNSELLING.WORKSHOPANDCOUNSELLING_TITLE}
            </Header>
        </Container>
    )
}
