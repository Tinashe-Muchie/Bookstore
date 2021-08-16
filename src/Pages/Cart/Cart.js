import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Context';
import styled from 'styled-components';
import { StyledLink } from '../../Components/ProductLayout/ProductLayout';
import { Wrapper } from '../../Pages/Management';
import { device } from '../../Components/index.js';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

function Cart() {

    const { Cart, dispatch, Commerce } = useContext(GlobalContext);

    /*Create a component for an empty cart*/
    const EmptyCart = () => {
        return (
            <Wrapper>
                <Main>
                    Your Cart is empty, <StyledLink to='/'>START ADDING ITEMS!</StyledLink>
                </Main>
            </Wrapper> 
        );
    }

    /*Create a component for when the cart is populated*/
    const PopulatedCart = () => {
        return (
            <Wrapper>
                {
                    Cart.line_items.map((item, index) => {

                        /*declare a new variable quantity that will be used to increment/decrement 
                        the number of items in the cart when a client clicks a button */
                        let Quantity = 1;
                        return (
                            <CartWrapper>
                                <Img src={item.media.source} alt='book image' />
                                <H2> {item.price.formatted_with_symbol}</H2>
                                <AddSubWrapper>
                                <AddSubButton
                                    onClick={()=>{
                                        //add the quantity of the items from the cart
                                        Quantity--
                                        //update the new quantity
                                        Commerce.cart.update(item.id, {quantity: Quantity})
                                            .then(response=>dispatch({type: 'cart', value: response.cart}))
                                    }}
                                >
                                    <AiOutlineMinus />
                                </AddSubButton>
                                <QuantityWrapper>
                                    <H2> {item.quantity} </H2>
                                </QuantityWrapper>
                                <AddSubButton
                                    onClick={()=>{
                                        //add the quantity of the items from the cart
                                        Quantity++
                                        //update the new quantity
                                        Commerce.cart.update(item.id, {quantity: Quantity})
                                            .then(response=>dispatch({type: 'cart', value: response.cart}))
                                    }}
                                >
                                    <BsPlus />
                                </AddSubButton>
                                </AddSubWrapper>
                                <Button
                                     onClick={()=>{
                                         //remove an item from the cart
                                        Commerce.cart.remove(item.id)
                                            .then(response=>dispatch({type:'cart', value: response.cart}))
                                    }}
                                >
                                    <BsTrash />
                                </Button>
                            </CartWrapper>
                        );
                    })
                }    
            </Wrapper>
        );
    }

    return (
        <Wrapper>

            {/*if the number of items is 0, there are no items in the cart therefore display the emptyCart 
                component otherwise display the populatedCart component*/
                (Cart.line_items.length === 0) ? <EmptyCart /> :<PopulatedCart />
            }
        </Wrapper>
    )
}

export default Cart;

/*styling using styled components*/
const Main = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.2em;
`;

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 12rem;

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: repeat(3, 3fr);
        gap: 2rem 0.75rem;
        justify-items: center;
        align-items: center;
    }

    @media ${device.laptop} {
        display: grid;
        grid-template-columns: repeat(5, 3fr);
        gap: 2rem 0.75rem;
        justify-items: center;
        align-items: center;
    }

    @media ${device.desktop} {
        display: grid;
    }
`;

const Img = styled.img`
    width: 12rem;
    height: 15rem;
    border: hidden;
    border-radius: 2px;
`;

const H2 = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    color: #0C0032;
    font-size: 1.1em;
`;

/*this wrapper is used to wrap around the add and subtract item buttons*/
const AddSubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
`;

const AddSubButton = styled.button`
    padding: 0.25rem 0.5rem;
    background-color: #0C0032;
    color: #C5C6C7;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.1em;
    border: hidden;
`;

const Button = styled.button`
    display: block;
    width: 100%;
    padding: 0.25rem 0rem;
    background-color: #0C0032;
    color: #C5C6C7;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.3em;
    border: hidden;
`;

const QuantityWrapper = styled.div`
    padding: 0.25rem 1rem;
    border: 0.01rem solid #808080;
    border-radius: 0.25rem;
    margin: 0rem 0.5rem;
`;