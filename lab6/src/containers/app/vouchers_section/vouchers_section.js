import './css/voucher_section.css'
import VouchersTitle from "./vouchers_title";
import VouchersBox from "./vouchers_box";

const VouchersSection = () => {
    return(
        <div className={'voucher_section_wrapper'}>
            <VouchersTitle/>
            <VouchersBox/>
        </div>
    )
}

export default VouchersSection