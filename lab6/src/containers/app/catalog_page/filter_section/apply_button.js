

const ApplyButton = ({ filtersApplied,onApply }) => {
    return (
        <div className={'filter_button_box'}>
            <button type={'button'} className={'apply_filters'} onClick={onApply}>
                {filtersApplied ? 'Cancel' : 'Apply'}
            </button>
        </div>
    );
};

export default ApplyButton