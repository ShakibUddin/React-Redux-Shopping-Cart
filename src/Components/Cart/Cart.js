import React, { useReducer } from 'react';
import CartReducer from '../../Redux/Reducers/CartReducer';
import { cartState } from '../../Redux/Stores/CartStore';
import CartProduct from '../CartProduct/CartProduct';

export default function Cart() {
    const [state, dispatch] = useReducer(CartReducer, cartState);
    return (
        <div className="flex justify-center w-2/5 bg-blue-200 min-h-screen">
            <p className="text-black font-bold text-center">
                Total: {state.total} Taka
            </p>
            <div className="flex flex-col">
                {
                    Array.from(state.products.keys()).map(product => <CartProduct key={product.id} title={product.title} quantity={state.products[product]} />)
                }
            </div>
        </div>
    )
}
