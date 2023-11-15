import './css/header_nav_catalog.css'

const HeaderNavCatalog = () => {
    return (
    <div>
        <div className={'nav_box_catalog'}>
            <ul>
                <li>
                    <a href={"/"}>Home</a>
                </li>
                <li>
                    <a href={"/catalog"}>Catalog</a>
                </li>
                <li>
                    <a href={"#"}>Cart</a>
                </li>
            </ul>
        </div>
    </div>
    )
}
export default HeaderNavCatalog