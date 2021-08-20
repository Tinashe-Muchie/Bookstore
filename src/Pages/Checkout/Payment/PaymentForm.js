import React, { useContext } from 'react';
import styled from 'styled-components';
import { device } from '../../../Components/index';
import { GlobalContext } from '../../../Context/Context';
import { Redirect } from 'react-router-dom';
import { CheckoutForm } from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function Payment({
    Shippingdata, Next, Prev, timeout}) {
    
    const { CheckoutToken, handleCaptureCheckout } = useContext(GlobalContext);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    return (
        <FormWrapper>
            <Heading>
                <H2>Payment Details</H2>
                <P>Order Summary and Payment method!</P>
            </Heading>
            <Form>
                <Fieldset>
                    <legend>
                        Order Summary
                    </legend>
                    <StyledUl>
                    {
                        (!CheckoutToken) 
                        ?   <Redirect to='/cart' />
                        :   CheckoutToken.live.line_items.map((item, index)=>(
                                <Styledli key={index}>
                                    <H3> {item.name} </H3>
                                    <Span>
                                        <H4> {`Quantity: ${item.quantity}`} </H4>
                                        <H4> {item.line_total.formatted_with_symbol}</H4>
                                    </Span>
                                </Styledli>
                        ))
                    }
                    </StyledUl>
                    <StyledUl>
                        <Styledli>
                            <H3>Total</H3>
                            <H4>
                            {
                                (!CheckoutToken) 
                                ?   <Redirect to='/cart' />
                                :   CheckoutToken.live.subtotal.formatted_with_symbol
                            } 
                            </H4>
                        </Styledli>
                    </StyledUl>
                </Fieldset>    
            </Form>
            <Form>
                <Fieldset>
                    <legend>
                        Payment Method
                    </legend>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm 
                            CheckoutToken={CheckoutToken} 
                            handleCaptureCheckout={handleCaptureCheckout}
                            Shippingdata={Shippingdata}
                            timeout={timeout}
                            Next={Next}
                            Prev={Prev}
                        />
                    </Elements>
                </Fieldset>    
            </Form>
        </FormWrapper>
    );
}

export default Payment;

/*styled components styling*/
const FormWrapper = styled.div`
    width: 20rem;
    height: auto;
    display: flex;
    flex-direction: column;
    border: .1rem solid #0C0032;
    border-radius: .2rem;
    margin-top: .5rem;
    padding: 0rem .1rem;
    margin-bottom: 5rem;

    @media ${ device.tablet } {
        width: 30rem;
        margin-top: .5rem;
    } 
`;

const Heading = styled.div`
    display: block;
    width: 100%;
    color: #C5C6C7;
    justify-content: center;
    align-content: center;
    height: 4rem;
    background-color: #0C0032;
    border: hidden;
    border-radius: .3rem;
    margin: .1rem 0rem;
`;

const H2 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 1.2rem;
    text-align: center;
    margin-top: .3rem;
`;

const H3 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 0.8rem;
`;

const H4 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .6rem;
    color: #C5C6C7;
`;

const P = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 0.8rem;
    text-align: center;
`;

const Form = styled.form`
    display: block;
    width: 100%;
    margin-bottom: .2rem;
`;

const Fieldset = styled.fieldset`
    border: .1rem solid #0C0032;
    border-radius: .3rem;
    
    legend {
        @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
        font-family: 'STIX+Two+Text', Georgia, serif;
        font-size: 0.9rem;
        padding: .5rem;
        font-weight: bold;
    }
`;

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

const Span = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;