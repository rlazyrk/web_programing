import './css/voucher.css';

const Voucher = (props) =>{
    return(
        <div className={'voucher_box'}>
            <img className={'voucher_image'} src={props.image} alt={"img"}/>
            <h2 className={'voucher_title'}>{props.title}</h2>
            <p className={'voucher_description'}>{props.description}</p>
            <p className={'voucher_price'}>{"Price:  " + props.price + "  UAN"}</p>
        </div>
    )
}

export default Voucher