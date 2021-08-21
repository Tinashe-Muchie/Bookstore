import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { DescriptionInfo } from './BookDescription';
import { Wrapper } from '../Pages/Management';
import { GlobalContext } from '../Context/Context';
import { device } from './index';

function DetailedBook() {
    
    /*retrieve the props send through the Link*/
    const location = useLocation();
    const { name, image, price, 
        description, id } = location.state;

    /*retrieve the commerce.js and dispatch function from the context */
    const { Commerce, dispatch } = useContext(GlobalContext);

    return (
        <Wrapper>
        <Container>
            <Heading>
                <Title> { name } </Title>
            </Heading>
            <Image>
                <Imge src={image} alt='book image' />
            </Image>
            <Main>
                <Price>Format: <Delivery>Paperback</Delivery></Price><br />
                <Price>Customer Rating : </Price><br />
                <Price>{ price } </Price>
                <PriceDisclaimer>Price and availability exclusive to this website</PriceDisclaimer><br />
                <Price>Estimated Delivery : <Delivery>4 to 6 working days</Delivery></Price><br />
                <Button
                    onClick={()=> {
                        /*use the commercejs function to add an item to the customer's cart,
                        the add function is provided for by commercejs, when the response then use 
                        dispatch function to update the cart information  */
                        Commerce.cart.add(id, 1)
                            .then(response => dispatch({type: 'cart', value: response.cart}))
                    }}
                >Add to Cart </Button>
            </Main>
            <Description>
                <DescriptionInfo bookDescription={description} />
            </Description>
        </Container>
        </Wrapper>   
    );
}

export default DetailedBook;

/*Styling using styled components */
const Heading = styled.div`
    grid-area: header;
`;

const Image = styled.div`
    grid-area: image;
    justify-self: center;
    align-self: center;
    padding: 0.5rem 1rem;
`;

/*main represents the part of the grid that contains the name, price, 
add to cart button etc*/ 
const Main = styled.div`
    grid-area: main;
    align-self: center;
    margin: 0.5rem 0.5rem;
`;

/*description encompasses the part that describes the product*/
const Description = styled.div`
    grid-area: description;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .5rem;

    @media ${device.tablet} {
        display: grid;
        grid-template-rows: 3rem 25rem auto;
        grid-template-columns: auto auto auto;
        grid-template-areas: 
        'header header header'
        'image main main '
        'description description description';
        grid-gap: 0.5rem;
        margin-top: 0rem;
    }    
`;

const Title = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif; 
    font-size: 1.1em;
    color: #0C0032;
    padding: 0rem 0.75rem;
`;

const Price = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.2em;
    color: #0C0032;
    font-weight: bold;
`;

const Imge = styled.img`
    width: 18rem;
    height: 25rem;
    border: hidden;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 0.25rem 2rem;
    background-color: #0C0032;
    color: #C5C6C7;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.3em;
    border: hidden;
`;

const Delivery = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 0.9em;
    color: #C5C6C7;
`;

const PriceDisclaimer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 0.9em;
    color: #C5C6C7;
`;

