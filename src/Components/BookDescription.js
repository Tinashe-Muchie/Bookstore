import React, { useState } from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';

export const DescriptionInfo = ({ bookDescription }) => {

    /*declare description, reviews variables to use as an eventKey attribute
    in the Nav */
    const description = 'description';
    const reviews = 'reviews';

    /*declare key and setKey function using useState in order to enable changing 
    of the active key in the tabs.*/
    const [key, setKey] = useState(description);

    /*the book description has html tags so use string.replace method to strip the
    tags of the string */
    const strippedString = bookDescription.replace(/(<([^>]+>))/gi,'');

    return (
        <Card>
            <Tab.Container 
                activeKey={key}
                onSelect={ (i) => setKey(i) }
            >
            <Card.Header>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link eventKey={description}>Description</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={reviews}>Reviews</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body style={{color: '#0C0032' }}>
                <Tab.Content className="tab-content overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={description}>
                        {strippedString}
                    </Tab.Pane>
                    <Tab.Pane eventKey={reviews}>
                        Be the first to leave a review
                    </Tab.Pane>
                </Tab.Content>
            </Card.Body>
            </Tab.Container>
        </Card>
    );
}