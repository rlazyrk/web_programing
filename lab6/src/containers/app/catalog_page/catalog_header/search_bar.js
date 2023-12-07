import './css/search_bar.css'

const Search_bar = ({setFilterCriteria}) => {

    const handleChange = (event) => {
        const searchText = event.target.value;
        setFilterCriteria(searchText);
    };
    return (
        <div className={'search-box'}>
            <input
                type={'text'}
                placeholder={'Search'}
                onChange={handleChange}
            />
        </div>
    )
}


export default Search_bar