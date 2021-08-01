import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import { Container, Row } from '../Components/ProductLayout';
import ProductLayout from '../Components/ProductLayout';

function Accounting() {

    const { Categories, Commerce, dispatch } = useContext(Context);

    return (
        <Container>
            <Row>
            {
                Categories?.accounting?.map( (book) => (
                    <ProductLayout 
                    bookImg={book.media.source}
                    bookPrice={book.price.formatted_with_symbol}
                    bookId={book.id}
                    category='accounting'
                    />
                ))
            }
            </Row>       
        </Container>
    );
    
}

export default Accounting;
