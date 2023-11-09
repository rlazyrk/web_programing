import './css/footer_social_media.css'
import facebook from '../../../images/facebook.png'
import twitter from '../../../images/twitter.png'
import linkedin from '../../../images/linkedin.png'
import google from '../../../images/google-plus.png'

const FooterSocialMedia = () => {
    return (
        <div className={'social_media_box'}>
            <a href={'#'}>
                <img src={facebook} alt={'img'} className={'icon'}/>
            </a>
            <a href={'#'}>
                <img src={twitter} alt={'img'} className={'icon'}/>
            </a>
            <a href={'#'}>
                <img src={linkedin} alt={'img'} className={'icon'}/>
            </a>
            <a href={'#'}>
                <img src={google} alt={'img'} className={'icon'}/>
            </a>
        </div>
    )
}

export default FooterSocialMedia