import React from 'react';
import './css/cart_item.css'

const CartItem = ({item, onIncrement, onDecrement, onRemove}) => {

    return (
        <div key={item.id} className={'cart_item_wrapper'}>
            <div className={'cart_item_left_side'}>
                <a href={`/catalog/${item.id}`}> <img className={'cart_item_image'} src={item.image} alt={item.title}/></a>
                <a href={`/catalog/${item.id}`} className={'cart_item_title'} style={{cursor: 'pointer'}}>
                    {item.title}
                </a>
            </div>
            <div className={'cart_item_right_side'}>
                <div>
                    <div className={'button_right_part'}>
                        <button className={'cart_button minus'} onClick={() => onDecrement(item.id, item.counter)}>-
                        </button>
                        <p className={'item_counter'}>{item.counter}</p>
                        <button className={'cart_button plus'} onClick={() => onIncrement(item.id)}>+</button>
                    </div>
                    <button className={'remove_button'} onClick={() => onRemove(item.id)}>Remove</button>
                </div>
                <h2 className={'item_price'}>{item.price * item.counter} UAH</h2>
            </div>
        </div>
    );
};

export default CartItem;