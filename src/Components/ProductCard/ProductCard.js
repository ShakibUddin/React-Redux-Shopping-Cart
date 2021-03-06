import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/ShopAction';

export default function ProductCard(props) {
    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating
    } = props.product;
    const dispatch = useDispatch();
    return (
        <div className="w-full flex flex my-10 py-10 shadow-md">
            <div className="w-1/4">
                <img className="w-full" src={image} alt="" />
            </div>
            <div className="w-3/4 mx-auto flex flex-col">
                <p>{title}</p>
                <p>{description}</p>
                <p>{category}</p>
                <p>{price}</p>
                <p>{rating?.rate}({rating?.count})</p>
                <button className="w-2/4 mx-auto bg-blue-500 px-4 py-2 text-white" onClick={() => dispatch(addToCart(props.product))}>Add To Cart</button>
            </div>
        </div>
    )
}
