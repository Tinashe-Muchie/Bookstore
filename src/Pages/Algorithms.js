import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import { Container, Row } from '../Components/ProductLayout';
import ProductLayout from '../Components/ProductLayout';

function Algorithms() {

    const { Categories, Commerce, dispatch } = useContext(Context);
    
    return (
        <Container>
            <Row>
            {
                Categories?.algorithms?.map((book) => (
                    <ProductLayout 
                    bookImg={book.media.source}
                    bookPrice={book.price.formatted_with_symbol}
                    bookId={book.id}
                    categories='algorithms'
                    />
                ))
            }
            </Row>       
        </Container>
    )
}

export default Algorithms;
