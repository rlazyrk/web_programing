import Select from 'react-select';

const SelectFilter = ({ options, value, onChange, placeholder }) => {
    return (
        <Select
            className={'filter_choice'}
            classNamePrefix="select"
            options={options}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default SelectFilter;