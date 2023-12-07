import './css/bottom_section.css'


const BottomSection = ({price}) => {
    return(
        <div className={'bottom_wrapper'}>
            <div className="price">
                <h3 className={'price_bottom'}> Price: {price}</h3>
            </div>
            <div className={'button_box_bottom'}>
                <div className="back_and_cart">
                    <a href="/Catalog"><button className={'bottom_button go_back'}>Go back</button></a>
                    <a href=""><button className={'bottom_button add_to_cart'}>Add to cart</button></a>
                </div>
            </div>

        </div>
    )
}

export default BottomSection