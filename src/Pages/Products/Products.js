import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProductReducer from '../../Redux/Reducers/ProductReducer';
import productsState from '../../Redux/Stores/ProductStore';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-right: auto;
    padding: 10px;
`;

export default function Products() {
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch({ type: "GET_PRODUCT", products: json })
            })
    }, []);
    const [state, dispatch] = useReducer(ProductReducer, productsState)
    return (
        <Wrapper>
            {
                state?.products.map(product => <ProductCard product={product} key={product.id}></ProductCard>)
            }
        </Wrapper>
    )
}
