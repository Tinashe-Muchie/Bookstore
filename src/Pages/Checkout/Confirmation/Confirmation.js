import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../../Components/index';

export const Confirmation = ({Order, Err, Done}) => (

    (Order.customer)
    ?   <FormWrapper>
            <Heading>
                <H2>Confirmation</H2>
                <P>Your order confirmation!</P>
            </Heading>
            <P> {`Thank you for shopping, ${Order.customer.firstname} ${Order.customer.lastname}`} </P>
            <P> {`Order ref: ${Order.customer_reference}`} </P>
            <ButtonWrapper>
                <StyledLink to='/'>
                    <Button>
                        Continue Shopping
                    </Button>
                </StyledLink>
            </ButtonWrapper>
        </FormWrapper>
    : (Done)
    ?    <FormWrapper>
            <Heading>
                <H2>Confirmation</H2>
                <P>Your order confirmation!</P>
            </Heading>
            <P> {`Thank you for shopping.`} </P>
            <ButtonWrapper>
                <StyledLink to='/'>
                    <Button>
                        Continue Shopping
                    </Button>
                </StyledLink>
            </ButtonWrapper>
        </FormWrapper>
    : (Err)
    ?   <FormWrapper>
            <Heading>
                <H2>Confirmation</H2>
                <P>Your order confirmation!</P>
            </Heading>
            <P>{`Error: ${Err}`}</P>
            <ButtonWrapper>
                <StyledLink to='/'>
                    <Button>
                        Continue Shopping
                    </Button>
                </StyledLink>
            </ButtonWrapper>
        </FormWrapper>
    :   <FormWrapper>
            <Heading>
                <H2>Confirmation</H2>
                <P>Your order confirmation!</P>
            </Heading>
            <LoaderContainer>
                <Loader></Loader>
            </LoaderContainer>
        </FormWrapper>
)

/*styled components*/
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

const P = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 0.8rem;
    text-align: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1rem 0rem;

    @media ${device.tablet}{
        justify-content: space-around;
    }
`;

const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    color: #0C0032;
    padding: .3rem 2rem;
    border: .1rem solid #C5C6C7;
    border-radius: .2rem;
    background-color: transparent;
    transition: 2s;

    &:hover {
        background-color: #0C0032;
        color: #C5C6C7;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
`;

const scale = keyframes`
    0% {transform: scale(0, 0)}
    100% {transform: scale(2, 2)}
`;
const Loader = styled.div`
    height: 1rem;
    width: 1rem;
    background-color: #0C0032;
    border-radius: 50%;
    display: inline-block;
    animation: ${scale} 3s ease-in-out infinite;
`;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 3rem;
`;