import products from '../../products.json';

let initialState = {
    productsInShop: products,
    productsInCart: new Map(),
    totalPrice: 0
}

export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (!state.productsInCart.has(action.payload)) {
                state.productsInCart.set(action.payload, 1);
                state.totalPrice += action.payload.price;
            }
            return {
                ...state,
                totalPrice: parseFloat(state.totalPrice.toFixed(2)),
                productsInCart: state.productsInCart
            };
        case 'INCREASE_PRODUCT':
            state.productsInCart.set(action.payload, state.productsInCart.get(action.payload) + 1);
            state.totalPrice += action.payload.price;
            return {
                ...state,
                totalPrice: parseFloat(state.totalPrice.toFixed(2)),
                productsInCart: state.productsInCart
            };
        case 'DECREASE_PRODUCT':
            state.productsInCart.set(action.payload, state.productsInCart.get(action.payload) - 1);
            state.totalPrice -= action.payload.price;
            return {
                ...state,
                totalPrice: parseFloat(state.totalPrice.toFixed(2)),
                productsInCart: state.productsInCart
            };
        case 'CLEAR_CART':
            return {
                productsInCart: new Map(),
                totalPrice: 0
            };
        default:
            return state
    }
}