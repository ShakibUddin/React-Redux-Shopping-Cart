import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../CartProduct/CartProduct';

export default function Cart() {
    const productsInCart = useSelector(state => state.shop.productsInCart);
    const totalPrice = useSelector(state => state.shop.totalPrice);
    return (
        <div className="flex flex-col items-center w-2/5 bg-blue-200 min-h-screen">
            <p className="text-black font-bold text-center">
                Total: {totalPrice} Taka
            </p>
            <div className="flex flex-col">
                {
                    Array.from(productsInCart.keys()).map(product => <CartProduct key={product.id} title={product.title} quantity={productsInCart.get(product)} product={product} />)
                }
            </div>
        </div>
    )
}
