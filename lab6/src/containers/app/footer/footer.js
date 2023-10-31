import './css/footer.css'
import FooterText from "./footer_text";
import FooterLogo from "./footer_logo";

const Footer = () => {
    return(<div className={'footer'}>
        <div className={'inner_footer_box'}>
            <FooterText/>
            <FooterLogo/>
        </div>
    </div>
    )
}

export default Footer