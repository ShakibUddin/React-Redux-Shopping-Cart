import productState from '../Stores/ProductStore';
export default function ProductReducer(state = productState, action) {
    switch (action.type) {
        case 'GET_PRODUCT':
            console.log(action.products)
            return { products: action.products };
        default:
            return state
    }
}

