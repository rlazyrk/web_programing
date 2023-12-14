import './css/header_nav.css'

const HeaderNav = () => {
    return (
    <div>
        <div className={'nav_box'}>
            <ul>
                <li>
                    <a href={"/"}>Home</a>
                </li>
                <li>
                    <a href={"/catalog"}>Catalog</a>
                </li>
                <li>
                    <a href={"/cart"}>Cart</a>
                </li>
            </ul>
        </div>
    </div>
    )
}
export default HeaderNav