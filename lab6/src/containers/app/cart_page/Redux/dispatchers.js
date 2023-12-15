
const initialState = {
    cart: []
}


export const addVoucherToCart = (voucher) => ({
    type: 'addToCart',
    data: voucher,  
});

export const addOneMoreVoucher = (voucherId) => ({
    type: 'addOneMore',
    data: voucherId,
});

export const removeOneVoucher = (voucherId) => ({
    type: 'removeOneVoucher',
    data: voucherId,
});

export const removeFromCart = (voucherId) => ({
    type: 'removeFromCart',
    data: voucherId,
});

export const removeAllFromCart = () => ({
    type: 'removeAllFromCart'
})


const cartReducer = (state = initialState, action) => {
    if(action.type === 'addToCart'){
        const existingItem = state.cart.find(voucher => voucher.id === action.data.id);
        if (existingItem){
            return{
                ...state,cart: state.cart.map(voucher => voucher.id === action.data.id ? {
                    ...voucher, counter: voucher.counter + 1} : voucher)
                };
            }
            else {
                return {
                    ...state, cart: [...state.cart, {...action.data, counter: 1}]
                }
            }
        }
    else if(action.type === 'addOneMore'){
        return {
            ...state,cart: state.cart.map(voucher => voucher.id === action.data ? {
                ...voucher, counter: voucher.counter + 1 }: voucher
            )
        }
    }
    else if(action.type === 'removeOneVoucher') {
        return {
            ...state,cart: state.cart.map(voucher => {
                if(voucher.id === action.data){
                    if(voucher.counter === 1){
                        return null
                    }
                    else {
                        return {...voucher, counter: voucher.counter -1}
                    }
                }
                return voucher
            }).filter(Boolean)
        }
    }
    else if(action.type === 'removeFromCart') {
        return {
            ...state, cart: state.cart.filter(voucher => voucher.id !== action.data)
        }
    }
    else if(action.type === 'removeAllFromCart'){
        return {
            ...state,
            cart: []
        }
    }
    return state;
}

export default cartReducer;