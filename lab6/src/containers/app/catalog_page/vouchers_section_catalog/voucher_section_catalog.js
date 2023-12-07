import React, { useEffect, useState } from 'react';
import VoucherItemCatalog from './voucher_item';
import './css/voucher_section_catalog.css';
import {getFiltered, getRequest} from "../../Rest_requests";
import LoadingScreen from "../../loading_screen/loading_screen";

const VouchersSectionCatalog = ({ helpFunk, filtersApplied, filterCriteria, duration, country, price }) => {
    const [searchText, setSearchText] = useState('');
    const [allVouchers, setAllVouchers] = useState([]);
    const [filteredVouchers, setFilteredVouchers] = useState([]);
    console.log(filterCriteria);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getRequest();
            setAllVouchers(result);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const applyFilters = async () => {
            const filters = {
                country: (country?.value ?? '').toLowerCase(),
                duration: (duration?.value ?? ''),
                price: (price?.value ?? ''),
                title: (filterCriteria ?? '')
            };

            try {
                const response = await getFiltered({filters})
                setFilteredVouchers(response);
            } catch (error) {
                console.error('Error fetching filtered data:', error);
            }
        };
        if (!filtersApplied) {
            setFilteredVouchers(allVouchers);
        } else {
            applyFilters();
        }
    }, [filtersApplied, allVouchers]);

    if(!filteredVouchers || !allVouchers){
        return (
            <div>
                <LoadingScreen/>
            </div>
        )
    }

    return (
        <div className={'inner_voucher_box_catalog'}>
            <div className={'vouchers_container_catalog'}>
                {filteredVouchers.map((voucher) => (
                    <VoucherItemCatalog
                        key={voucher.id}
                        id={voucher.id}
                        image={voucher.image}
                        title={voucher.title}
                        description={voucher.description}
                        price={voucher.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default VouchersSectionCatalog;
