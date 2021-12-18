import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../Redux/Actions/ShopAction';
import CartProduct from '../CartProduct/CartProduct';

export default function Cart() {
    const productsInCart = useSelector(state => state.shop.productsInCart);
    const totalPrice = useSelector(state => state.shop.totalPrice);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center w-2/5 bg-blue-200 min-h-screen">
            <p className="text-black font-bold text-center">
                Total: {totalPrice} Taka
            </p>
            <button className="w-2/4 bg-red-500 text-white" onClick={() => dispatch(clearCart())}> Clear </button>
            <div className="flex flex-col">
                {
                    Array.from(productsInCart.keys()).map(product => <CartProduct key={product.id} title={product.title} quantity={productsInCart.get(product)} product={product} />)
                }
            </div>
        </div>
    )
}
