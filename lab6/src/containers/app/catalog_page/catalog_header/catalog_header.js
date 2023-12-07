import HeaderTitle from "../../header/haeder_title.js";
import Search_bar from "./search_bar";
import HeaderNavCatalog from "./header_nav_catalog";
import './css/catalog_header.css'

const HeaderCatalog = ({setFilterCriteria}) => {
    return (
        <header className={'header_wrapper_catalog'}>
            <div className={'header_div_catalog'}>
                <HeaderTitle/>
                <div className={'nav_container_catalog'}>
                    <HeaderNavCatalog/>
                </div>
                <Search_bar setFilterCriteria={setFilterCriteria}/>
            </div>
        </header>
    )
}

export default HeaderCatalog