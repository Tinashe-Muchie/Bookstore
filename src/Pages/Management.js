import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Context';
import { 
    Wrapper, Loader, LoaderContainer,
    StyledUOL, GridContainer } from './index';

import ProductLayout from '../Components/ProductLayout/ProductLayout';

function Management() {

    const { Categories } = useContext(GlobalContext);
    
    return (
        <Wrapper>
            {
                (Categories.management.length === 0)
                ?   <LoaderContainer>
                        <Loader></Loader>
                    </LoaderContainer>
                :   <StyledUOL>
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
            }      
        </Wrapper>
    );
}

export default Management;



 
