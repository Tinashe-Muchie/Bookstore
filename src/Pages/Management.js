import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../Context/Context';
import { device } from '../Components/index';
import ProductLayout from '../Components/ProductLayout/ProductLayout';

function Management() {

    const { Categories } = useContext(GlobalContext);
    
    return (
        <Wrapper>
            <StyledUOL>
                <GridContainer>
                {
                Categories?.management?.map( (book) => (
                    <ProductLayout 
                        bookId={book.id}
                        bookImg={book.media.source}
                        bookPrice={book.price.formatted_with_symbol}
                        bookName={book.name}
                        bookDescription={book.description}
                        relatedBooks={book.related_products}
                    />   
                    ))
                }
                </GridContainer>
            </StyledUOL>       
        </Wrapper>
    );
}

export default Management;

/*Styling using styled components*/
export const Wrapper = styled.div`
    margin: 0rem 0rem;

    @media ${device.tablet} {
        margin: 0vh 10vw;
        padding: 2vh 0vw;
    }
`;

 export const StyledUOL = styled.ul`
    padding: 0px 10px;
`;

export const GridContainer =styled.div`
    display: grid;
    grid-template-columns: repeat(1, .5fr);
    gap: 1rem 0.1rem;
    justify-content: center;
    margin: .5rem 0rem;

    @media ${device.mobileM} {
        grid-template-columns: repeat(2, .5fr);
        gap: 1rem 0.1rem;
        justify-items: center;
    }

    @media ${device.tablet} {
        grid-template-columns: repeat(3, 2fr);
        gap: 1.5rem .25rem;
    }

    @media ${device.laptop} {
        grid-template-columns: repeat(5, 3fr);
        gap: 1rem .75rem;
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(8, 3fr);
        gap: 1rem .75rem;
    }
`;

 
