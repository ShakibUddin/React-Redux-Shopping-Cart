import React, { useReducer } from 'react';
import styled from 'styled-components';
import CartReducer from '../../Redux/Reducers/CartReducer';
import { cartState } from '../../Redux/Stores/CartStore';

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    margin: 10px 0;
`;
const Title = styled.p`
    color: black;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`;
export default function CartProduct(props) {
    const [state, dispatch] = useReducer(CartReducer, cartState)

    return (
        <Wrapper>
            <button onClick={() => dispatch({ type: "ADD_ITEM" })}>+</button>
            <Title>{props.title} - {props.quantity}</Title>
            <button>-</button>
        </Wrapper>
    )
}
