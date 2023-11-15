import HeaderCatalog from "./catalog_header/catalog_header";
import Footer from "../footer/footer";
import FilterSection from "./filter_section/filter_section";
import VouchersSectionCatalog from "./vouchers_section_catalog/voucher_section_catalog";
import './catalog.css'


const Catalog = () => {
    return(<div className={'catalog_box'}>
        <HeaderCatalog/>

        <div className={"body_catalog"}>
            <FilterSection/>
            <VouchersSectionCatalog/>
            <Footer/>
        </div>
    </div>)
}

export default Catalog