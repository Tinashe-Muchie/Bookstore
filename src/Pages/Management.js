import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Context';
import { Container, Row } from 'react-bootstrap';
/*import the Layout from components*/
import ProductLayout from '../Components/ProductLayout';

function Management() {

    const { Categories, Commerce, dispatch} = useContext(GlobalContext);
    
    return (
        <Container>
            <Row>
            {
                Categories?.management?.map( (book) => (
                    <ProductLayout 
                    bookImg={book.media.source}
                    bookPrice={book.price.formatted_with_symbol}
                    bookId={book.id}
                    category='management'
                    />
                ))
            }
            </Row>       
        </Container>
    );
}

export default Management;
