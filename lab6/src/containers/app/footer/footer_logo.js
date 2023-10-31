import logo from '../../../images/logo.png';
import './css/footer_logo.css';

const FooterLogo = () => {
    return (
        <div className={'logo_box'}>
            <img className={'footer_logo'} src={logo} alt={"logo"}/>
        </div>
    )
}

export default FooterLogo