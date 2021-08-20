import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../../../Components/index';
import { Redirect } from 'react-router-dom';
import { 
    CardElement, 
    useStripe, 
    useElements } from '@stripe/react-stripe-js';

export const CheckoutForm = ({
    CheckoutToken, handleCaptureCheckout, Shippingdata,
    timeout, Next, Prev })=> {

    const stripe = useStripe();
    const elements = useElements();
    const [ err, setErr ] = useState();
    const Err = err ? true : false;

    const handleClick = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if (error) {
            setErr(error)
        } else {
            const orderData = {
                line_items: CheckoutToken.live.line_items,
                customer: {
                    firstname: Shippingdata.name,
                    lastname :Shippingdata.surname,
                    email: Shippingdata.email,
                },
                shipping: {
                    name: 'Primary',
                    street: Shippingdata.address,
                    town_city: Shippingdata.city,
                    county_state: Shippingdata.shipSubdivision,
                    postal_zip_code: Shippingdata.zip,
                    country: Shippingdata.shipCountry,
                },
                fulfillment: {shipping_method: Shippingdata.shipOption},
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }
            handleCaptureCheckout(CheckoutToken.id, orderData);
            timeout();
            Next();
        }
    }

    return (
        <StyledUl>
            <Styledli>
                <H3>Card Details</H3>
            </Styledli>
            <Styledli>
                <CardElement />
            </Styledli>
            { 
                Err && <Alert>
                            {err.message}
                        </Alert>
            }
            <Styledli>
                <ButtonWrapper>
                    <Button onclick={Prev}>Back</Button>
                    <Button
                        onClick={handleClick}
                        disabled={!stripe}
                    >
                        Pay {   
                                (!CheckoutToken)
                                ?   <Redirect to="/cart" />
                                :   CheckoutToken.live.subtotal.formatted_with_symbol
                            }
                    </Button>
                </ButtonWrapper>
            </Styledli>
        </StyledUl>
    );
}

/*styled components */
const StyledUl = styled.ul`
    display: block;
    width: 100%;
    padding: 0rem;
    margin-top: 0.1rem;
    background-color: transparent;
`;

const Styledli = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    border-top: .1rem solid #C5C6C7;
    padding: .2rem .1rem;
`;

const H3 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 0.8rem;
    border-top: .1rem solid #C5C6C7;
    border-bottom: .1rem solid #C5C6C7;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    margin: 1rem 0rem;

    @media ${device.tablet}{
        justify-content: space-around;
    }
`;

const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    color: #C5C6C7;
    padding: .3rem 2rem;
    border: .1rem solid #C5C6C7;
    border-radius: .2rem;
    background-color: #0C0032;
    transition: 2s;

    &:hover {
        background-color: transparent;
        color: #0C0032;
    }
`;

const Alert = styled.div`
    padding: 2rem;
    background-color: #ff0000;
    color: #C5C6C7;
`;