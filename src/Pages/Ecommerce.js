import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Context';
import { 
    Wrapper,
    StyledUOL,
    GridContainer
} from './Management';
import ProductLayout from '../Components/ProductLayout/ProductLayout';

function Ecommerce() {

    const { Categories } = useContext(GlobalContext);
    
    return (
        <Wrapper>
            <StyledUOL>
                <GridContainer>
                {
                Categories?.ecommerce?.map( (book) => (
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
        </Wrapper>
    )
}

export default Ecommerce
