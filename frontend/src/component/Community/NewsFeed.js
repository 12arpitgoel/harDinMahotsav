import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsFeed() {
    return (
        <>
            <br />
            <Card border="info" style={{ width: '20rem' }}>
                <Card.Header>News Feed</Card.Header>
                <Card.Body>
                    <Card.Text>
                        1. Only 37 days left for the International Day of Yoga! #IDY2022

                        Celebrate the journey, of the self, to the self & through the self at the #YogaUtsav to be celebrated on the 21st of June, 2022.
                    </Card.Text>
                    <Card.Text>
                        2. #ContestAlert: In celebration of the upcoming #InternationalMuseumDay, share your #MuseumMemories with us.

                        Submit in the form of a picture/video/audio in the comments & stand a chance to get featured on our page & win exciting prizes.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default NewsFeed;