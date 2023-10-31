import HeaderTitle from "./heder_title.js";
import HeaderNav from "./header_nav.js";
import './css/header.css';

const Header = () => {
    return (
        <header className={'header_wrapper'}>
            <div className={'header_div'}>
                <HeaderTitle/>
                <div className={'nav_container'}>
                    <HeaderNav/>
                </div>
            </div>
        </header>
    )
}

export default Header