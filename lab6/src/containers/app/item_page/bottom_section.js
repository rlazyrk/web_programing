import './css/bottom_section.css';
import {useDispatch} from 'react-redux';
import {addVoucherToCart} from '../cart_page/Redux/dispatchers';
import {useState} from "react";

const BottomSection = ({voucherItem}) => {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(1)

    const handleSetCounter = (e) => {
        const newCounter = parseInt(e.target.value, 10);
        setCounter(newCounter);
    };
    const handleAddToCart = () => {
        for(let i =0; i < counter; i++) {
            dispatch(addVoucherToCart(voucherItem));
        }
    };

    return (
        <div>
            <div >
                <div className={'count_input_box'}>
                    <input
                        className={'counter_field'}
                        type="number"
                        id="count"
                        name="count"
                        min="1"
                        value={counter}
                        onChange={handleSetCounter}
                    />
                    <label className={'counter_text'}>Count:</label>
                </div>
                <div className={'bottom_wrapper'}>
                <div className="price">
                    <h3 className={'price_bottom'}> Price: {voucherItem.price}</h3>
                </div>
                <div className={'button_box_bottom'}>
                    <div className="back_and_cart">
                        <a href="/Catalog">
                            <button className={'bottom_button go_back'}>Go back</button>
                        </a>
                        <a href="/cart" className={'bottom_button add_to_cart'} onClick={handleAddToCart}>
                            Add to cart
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;
