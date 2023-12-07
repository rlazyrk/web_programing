import Select from 'react-select';

const SelectFilter = ({ options, value, onChange, placeholder}) => {
    const defaultValue = options.find((option) => option.value === value);

    return (
        <Select
            className={'filter_choice'}
            classNamePrefix="select"
            options={options}
            value={defaultValue}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default SelectFilter;