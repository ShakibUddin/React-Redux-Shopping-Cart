import { cartState } from "../Stores/CartStore";

export default function CartReducer(state = cartState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (!state.products.has(action.product)) {
                state.products.set(action.product, 1);
                state.total = action.product.price;
                console.log(state.products)
            }
            return { products: state.products };
        case 'ADD_ITEM':
            state.products.set(action.product, state.products.get(action.product) + 1);
            state.total += action.product.price;
            return { products: state.products };
        case 'REMOVE_ITEM':
            state.products.set(action.product, state.products.get(action.product) - 1);
            state.total -= action.product.price;
            return { products: state.products };
        case 'CHECKOUT':
            return { total: 0, products: new Map() };
        default:
            return state
    }
}