import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ProductLayout({ bookImg, bookPrice, bookId,
    bookDescription, bookName, relatedBooks }) {
        
    return (
        <StyledLink
            to= {{
                pathname: '/detailed',
                state: {
                    name: bookName,
                    image: bookImg,
                    price: bookPrice,
                    description: bookDescription,
                    related_books: relatedBooks,
                    id: bookId
                }
            }}
            key={bookId}
        >
        <ProductList 
            key={bookId}
        >
            <Img src={bookImg} alt='bookPic' />
            <PriceTitle>
                {bookPrice}
            </PriceTitle>  
        </ProductList>
        </StyledLink>         
    );
}

export default ProductLayout;

/*Styling using styled-components*/

export const ProductList = styled.li`
    list-style-type: none;
    background-color: #0C0032;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: hidden;
    border-radius: 3px;
`;

/*const ImgContainer = styled.div`
    position: relative;
    width: auto;
    height: auto;
`;

const Overlay = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.5); 
    color: #C5C6C7;
    width: 100%;
    transition: .5s ease;
    opacity:0;
    font-size: 1.3rem;
    padding: 6.5rem 2rem;
    text-align: center;
    font-weight: bold;

    &:hover {
        opacity: 1;
    }
`;*/

export const Img = styled.img`
    width: 10rem;
    height: 15rem;
    border: hidden;
    border-radius: 2px;
`;

export const PriceTitle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    color: #C5C6C7;
    font-size: 18px;
    font-weight: bold;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
`;
 
export const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
`;


