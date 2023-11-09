import './css/footer.css'
import FooterText from "./footer_text";
import FooterLogo from "./footer_logo";
import FooterSocialMedia from "./footer_social_media";
import FooterCopyright from "./footer_copyright";

const Footer = () => {
    return(<div className={'footer'}>
        <div className={'inner_footer_box'}>
            <FooterText/>
            <FooterLogo/>
            <FooterSocialMedia/>
        </div>
            <FooterCopyright/>
    </div>
    )
}

export default Footer