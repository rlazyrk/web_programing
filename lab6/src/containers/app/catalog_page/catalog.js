import HeaderCatalog from "./catalog_header/catalog_header";
import Footer from "../footer/footer";
import FilterSection from "./filter_section/filter_section";
import VouchersSectionCatalog from "./vouchers_section_catalog/voucher_section_catalog";
import './catalog.css'
import {useState} from "react";


const Catalog = () => {
    const [filterCriteria, setFilterCriteria] = useState("");
    const [duration, setDuration] = useState('');
        const [price, setPrice] = useState('');
        const [country, setCountry] = useState('');
        const [filtersApplied, setFiltersApplied] = useState(false);

    const helpFunk = (filtersApplied) => {
        if(filtersApplied === false){
            setFiltersApplied(true)
        }
        else {
            setFiltersApplied(false)
        }
    }
    const handleApplyFilters = (selectedFilters) => {
        setDuration(selectedFilters.duration);
        setPrice(selectedFilters.price);
        setCountry(selectedFilters.country);
        helpFunk(filtersApplied);
    };
    return (
        <div className={'catalog_box'}>
            <HeaderCatalog setFilterCriteria={setFilterCriteria} />

            <div className={"body_catalog"}>
                <FilterSection filtersApplied={filtersApplied}  onApplyFilters={handleApplyFilters} setCountry={setCountry} setDuration={setDuration} setPrice={setPrice} />
                <VouchersSectionCatalog helpFunk={helpFunk} filterCriteria={filterCriteria} duration={duration} price={price} country={country} filtersApplied={filtersApplied}  />
                <Footer />
            </div>
        </div>
    );
};

export default Catalog