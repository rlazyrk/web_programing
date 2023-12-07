import React, {useEffect, useState} from 'react';
import './css/filter_section.css';
import SelectFilter from './select_filter';
import ApplyButton from './apply_button';

const FilterSection = ({filtersApplied,onApplyFilters,  setDuration, setPrice, setCountry }) => {
    const [duration, setDurationLocal] = useState('');
    const [price, setPriceLocal] = useState('');
    const [country, setCountryLocal] = useState('');

    useEffect(() => {
        setDuration(duration);
        setPrice(price);
        setCountry(country);
    }, [duration, price, country, setDuration, setPrice, setCountry]);

    const handleApplyFilters = () => {
        onApplyFilters({ duration, price, country });
    };
    const handleSelectChange = (name, value) => {
        switch (name) {
            case 'Duration':
                setDurationLocal(value);
                break;
            case 'Price':
                setPriceLocal(value);
                break;
            case 'Country':
                setCountryLocal(value);
                break;
            default:
                break;
        }
    };

    const durationOptions = {
        name: 'Duration',
        placeholder: 'Duration ...',
        values: [
            { label: 'Less than 7 days', value: '7' },
            { label: 'More than 7 days', value: '8' },
            { label: 'Duration ...', value: '' }
        ],
    };

    const priceOptions = {
        name: 'Price',
        placeholder: 'Price ...',
        values: [
            { label: 'Less than 500 UAH', value: '500' },
            { label: 'Less than 1000 UAH', value: '1000' },
            { label: 'Less than 2000 UAH', value: '2000' },
            { label: 'Price ...', value: '' }
        ],
    };

    const countryOptions = {
        name: 'Country',
        placeholder: 'Country ...',
        values: [
            { label: 'Norway', value: 'Norway' },
            { label: 'Venice', value: 'Venice' },
            { label: 'Spain', value: 'Spain' },
            { label: 'Country ...', value: '' }
        ],
    };



    return (
        <div className={'filter_section_box_wrapper'}>
            <div className="filter_section_box">
                <SelectFilter
                    key={durationOptions.name}
                    options={durationOptions.values}
                    value={duration}
                    placeholder={durationOptions.placeholder}
                    onChange={(value) => handleSelectChange(durationOptions.name, value)}
                />
                <SelectFilter
                    key={priceOptions.name}
                    options={priceOptions.values}
                    value={price}
                    placeholder={priceOptions.placeholder}
                    onChange={(value) => handleSelectChange(priceOptions.name, value)}
                />
                <SelectFilter
                    key={countryOptions.name}
                    options={countryOptions.values}
                    value={country}
                    placeholder={countryOptions.placeholder}
                    onChange={(value) => handleSelectChange(countryOptions.name, value)}
                />
            </div>
            <ApplyButton filtersApplied={filtersApplied} onApply={handleApplyFilters}/>
        </div>
    );
};


export default FilterSection;