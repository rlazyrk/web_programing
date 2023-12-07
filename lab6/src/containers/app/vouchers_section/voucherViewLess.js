import './css/voucher_viewMore.css'
import React from 'react';

const VoucherViewLess = ({onClick}) =>{

    return(
        <div className={'button_box'}>
            <button className="view_more_button" onClick={onClick}>
                View less
            </button>
        </div>
    )
}

export default VoucherViewLess