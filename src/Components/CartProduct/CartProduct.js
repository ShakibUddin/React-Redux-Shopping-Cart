import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseProduct, increaseProduct } from '../../Redux/Actions/ShopAction';


export default function CartProduct(props) {
    const dispatch = useDispatch();
    return (
        <div className="w-11/12 justify-between mx-auto flex my-4 p-2 bg-white">
            <p className="text-black mb-4">{props.title}</p>
            <div className="w-2/12 flex flex-col items-center justify-between">
                <button className="w-full bg-green-500 text-white" onClick={() => dispatch(increaseProduct(props.product))}> + </button>
                <p className="text-black">{props.quantity}</p>
                <button className="w-full bg-red-500 text-white" onClick={() => dispatch(decreaseProduct(props.product))}> - </button>
            </div>
        </div>
    )
}
