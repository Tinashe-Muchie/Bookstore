import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import { Container, Row } from 'react-bootstrap';
import ProductLayout from '../Components/ProductLayout';

function History() {

    const { Category, Commerce, dispatch } = useContext(Context);

    return (
        <Container>
            <Row>
            {
                Category?.history?.map( (book) => (
                    <ProductLayout 
                    bookImg={book.media.source}
                    bookPrice={book.price.formatted_with_symbol}
                    bookId={book.id}
                    category='history'
                    />
                ))
            }
            </Row>       
        </Container>
    )
}

export default History;
