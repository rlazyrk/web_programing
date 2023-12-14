import './css/voucher_item.css';
import ViewMoreItem from "./view_more_item";

const VoucherItemCatalog = (props) =>{
    return(
        <div className={'voucher_box_catalog'}>
            <div className={'voucher_image_text_box'}>
                <img className={'voucher_image_catalog'} src={props.image} alt={"img"}/>
                <h2 className={'voucher_title_catalog'}>{props.title}</h2>
                <p className={'voucher_description_catalog'}>{props.description}</p>
            </div>
            <p className={'voucher_price_catalog'}>{"Price:  " + props.price + "  UAH"}</p>
            <ViewMoreItem id={props.id}/>
        </div>
    )
}

export default VoucherItemCatalog