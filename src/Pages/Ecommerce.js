import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import { Container, Row } from '../Components/ProductLayout';
import ProductLayout from '../Components/ProductLayout';

function Ecommerce() {

    const { Categories, Commerce, dispatch } = useContext(Context);
    
    return (
        <Container>
            <Row>
            {
                Categories?.ecommerce?.map((book) => (
                    <ProductLayout 
                    bookImg={book.media.source}
                    bookPrice={book.price.formatted_with_symbol}
                    bookId={book.id}
                    category='ecommerce'
                    />
                ))
            }
            </Row>       
        </Container>
    )
}

export default Ecommerce
