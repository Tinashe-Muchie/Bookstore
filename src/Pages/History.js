import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Context';
import ProductLayout from '../Components/ProductLayout/ProductLayout';
import { 
    Wrapper, Loader, LoaderContainer,
    StyledUOL, GridContainer } from './index';

function History() {

    const { Categories } = useContext(GlobalContext);

    return (
        <Wrapper>
            {
                (Categories.history.length === 0)
                ?   <LoaderContainer>
                        <Loader></Loader>
                    </LoaderContainer>
                :   <StyledUOL>
                    <GridContainer>
                    {
                        Categories?.history?.map( (book) => (
                            <ProductLayout 
                                bookImg={book.media.source}
                                bookPrice={book.price.formatted_with_symbol}
                                bookId={book.id}
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
    )
}

export default History;
