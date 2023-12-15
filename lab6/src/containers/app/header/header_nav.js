import './css/header_nav.css'
import {useNavigate} from "react-router-dom";
import {removeAllFromCart} from "../cart_page/Redux/dispatchers";
import {useDispatch} from "react-redux";

const HeaderNav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigation = (path) => {
        navigate(path);
    };
    const logOut = () => {
        localStorage.setItem('userIsLogined', false)
        dispatch(removeAllFromCart())
        navigate('/login')
    }

    return (
        <div>
            <div className={'nav_box'}>
                <ul>
                    <li>
                        <button className={'logout'} onClick={() => handleNavigation('/')}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button className={'logout'} onClick={() => handleNavigation('/catalog')}>
                            Catalog
                        </button>
                    </li>
                    <li>
                        <button className={'logout'} onClick={() => handleNavigation('/cart')}>
                            Cart
                        </button>
                    </li>
                    <li>
                        <button className={'logout'} onClick={logOut}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default HeaderNav