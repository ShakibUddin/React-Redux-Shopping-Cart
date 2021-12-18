import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard';


export default function Products() {
    const products = useSelector((state) => state.shop.productsInShop);
    return (
        <div className="w-3/5 flex flex-col">
            {
                products.map(product => <ProductCard product={product} key={product.id}></ProductCard>)
            }
        </div>
    )
}
