import './css/filter_section.css'
import {useState} from "react";
import SelectFilter from "./select_filter";
import Apply_button from "./apply_button";
import ApplyButton from "./apply_button";

const FilterSection = () => {

    const options = [
        {
            name: 'Duration',
            placeholder: "Duration ...",
            values: [
                { label: 'Less than 7 days', value: '1' },
                { label: 'More than 7 days', value: '2' },
            ],
        },
        {
            name: 'Price',
            placeholder: "Price ...",
            values: [
                { label: 'Less than 500 UAH', value: '1' },
                { label: 'Less than 1000 UAH', value: '2' },
                { label: 'Less than 2000 UAH', value: '3' },
            ],
        },
        {
            name: 'Country',
            placeholder: "Country ...",
            values: [
                { label: 'Norway', value: '1' },
                { label: 'Venice', value: '2' },
                { label: 'Spain', value: '3' },
            ],
        },
    ];




    const [selectedOptions, setSelectedOptions] = useState({});

    return (
        <div className={'filter_section_box_wrapper'}>
            <div className="filter_section_box">
                {options.map((option) => (
                    <SelectFilter
                        key={option.name}
                        options={option.values}
                        value={selectedOptions[option.name]}
                        placeholder={option.placeholder}
                    />
                ))}
            </div>
            <ApplyButton/>
        </div>
    );
}
export default FilterSection