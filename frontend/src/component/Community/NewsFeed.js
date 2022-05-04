import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsFeed() {
    return (
        <>
            <br />
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>News Feed</Card.Header>
                <Card.Body>
                    <Card.Title>Info Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default NewsFeed;