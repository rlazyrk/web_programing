import './css/voucher_section.css'
import VouchersTitle from "./vouchers_title";
import VouchersBox from "./vouchers_box";
import VoucherViewMore from "./voucher_viewMore";

const VouchersSection = () => {
    return(
        <div className={'voucher_section_wrapper'}>
            <VouchersTitle/>
            <VouchersBox/>
            <VoucherViewMore/>
        </div>
    )
}

export default VouchersSection