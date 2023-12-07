import './css/voucher_viewMore.css'
import React from 'react';

const VoucherViewMore = ({onClick }) =>{

    return(
        <div className={'button_box'}>
            <button className="view_more_button" onClick={onClick }>
                View more
            </button>
        </div>
    )
}

export default VoucherViewMore