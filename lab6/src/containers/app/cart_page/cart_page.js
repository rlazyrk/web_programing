import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart, addOneMoreVoucher, removeOneVoucher} from './Redux/dispatchers';
import Header from "../header/header";
import Footer from "../footer/footer";
import CartItem from './cart_item';
import './css/cart_page.css'

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleIncrementQuantity = (itemId) => {
        dispatch(addOneMoreVoucher(itemId));
    };

    const handleDecrementQuantity = (itemId, quantity) => {
        if (quantity === 1) {
                dispatch(removeFromCart(itemId));
        } else {
            dispatch(removeOneVoucher(itemId));
        }
    };

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => {
            return total + item.counter * item.price;
        }, 0);
    };

    return (
        <div>
            <Header/>
            <div className={'cart_page'}>
                <div className={'cart_page_inner_box'}>
                    <div className={'cart_title_wrapper'}>
                        <h1 className={'cart_page_title'}>Shopping Cart</h1>
                    </div>
                    <div className={'cart_wrapper'}>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onIncrement={handleIncrementQuantity}
                                onDecrement={handleDecrementQuantity}
                            />
                        ))}
                    </div>
                    <div className={'total_price'}>
                        <h2>{calculateTotalAmount()} UAH</h2>
                        <h2>Total amount:</h2>
                    </div>
                    <div className={'cart_buttons_box'}>
                        <a className={'cart_button_bottom back'} href={'/catalog'}>Back to Catalog</a>
                        <a className={'cart_button_bottom continue'} href={"#"}>Continue</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CartPage;
