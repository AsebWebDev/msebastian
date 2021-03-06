import { Image } from 'semantic-ui-react';
import { isMobile } from '../../../utilities/helpers'
import headerPic from '../../../assets/images/header.png'
import './LandingPage.scss'

function LandingPage() {
    return (
        <div id="landing-page">
          <Image src={headerPic} alt="lettering of name" size={isMobile() ? "medium" : "huge"}/>
        </div>
    )
}

export default LandingPage
