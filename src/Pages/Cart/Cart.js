import React, { useContext, useState } from 'react';
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
        /*declare a new variable quantity that will be used to increment/decrement 
        the number of items in the cart when a client clicks a button */
        const initialQuantity = 1;
        const [Quantity, setQuantity] = useState(initialQuantity);

        return (
            <Wrapper>
                <CartContainer>
                {
                    Cart.line_items.map((item, index) => {
                        return (
                            <CartWrapper key={index}>
                                <Img src={item.media.source} alt='book image' />
                                <H2> {item.price.formatted_with_symbol}</H2>
                                <AddSubWrapper>
                                    <AddSubButton
                                        onClick={()=>{
                                        //set the quantity by utilizing setQuantity
                                        setQuantity(Quantity - 1);
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
                                        //change the quantity of items by using setQuantity
                                        setQuantity(Quantity + 1)
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
                </CartContainer> 
                <CheckoutBar>
                    <H3>Subtotal: {Cart.subtotal.formatted_with_symbol} </H3>
                    <AddSubButton
                        onClick={()=>{
                            Commerce.cart.empty()
                                .then(response => dispatch({type:'cart', value: response.cart}))
                        }}
                    >
                        Empty Cart
                    </AddSubButton>
                    <StyledLink to='/checkout'>
                        <CheckoutButton>
                            Checkout
                        </CheckoutButton>
                    </StyledLink>
                </CheckoutBar>
            </Wrapper>
        );
    }

    return (
        <>

            {/*if the number of items is 0, there are no items in the cart therefore display the emptyCart 
                component otherwise display the populatedCart component*/
                (Cart.line_items.length === 0) ? <EmptyCart /> :<PopulatedCart />
            }
        </>
    )
}

export default Cart;

/*styling using styled components*/
const Main = styled.div`
    display: flex;
    justify-content: center;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.1rem;
    padding-top: .5rem;
    padding-left: 1rem;
`;

const CartContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${device.mobileL} {
        display: grid;
        grid-template-columns: repeat(2, .75fr);
        grid-gap: 0.5rem;
        padding: 0.5rem;
    }

    @media ${device.laptop} {
        display: grid;
        grid-template-columns: repeat(5, 0fr);
        grid-gap: 1rem;
        padding: 0rem;
        justify-items: center;
    }

    @media ${device.desktop} {
        display: grid;
        grid-template-columns: repeat(7, 0fr);
    }
`;

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 12rem;
    padding: .1rem;
    margin-top: .4rem;
    border: 0.1rem solid #0C0032;
    border-radius: 0.25rem;
`;

const Img = styled.img`
    width: 11rem;
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
    padding: 0.2rem 1.2rem;
    background-color: #0C0032;
    color: #C5C6C7;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.1em;
    border: hidden;
    border-radius: 0.2rem;
    transition: 3s;

    &:hover {
        background-color: #C5C6C7;
        color: #0C0032;
    }
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
    border-radius: 0.2rem;
`;

const QuantityWrapper = styled.div`
    padding: 0.25rem 1rem;
    border: 0.01rem solid #808080;
    border-radius: 0.25rem;
    margin: 0rem 0.5rem;
`;

const CheckoutBar = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin-top: 0.75rem;
    border: .1rem solid #0C0032;
    border-radius: .25rem;
    padding: .5rem;

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const H3 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    color: #0C0032;
    font-size: 1.1em;
    font-weight: bold;
`;

const CheckoutButton = styled.button`
    display: block;
    width: 100%;
    padding: .2rem 1.2rem;
    background-color: transparent;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.1em;
    border: .1rem solid #0C0032;
    border-radius: 0.2rem;
    margin-top: .75rem;
    transition: 2s;

    &:hover {
        background-color: #C5C6C7;
    }

    @media ${device.tablet} {
        margin-top: 0rem;
    }
`;