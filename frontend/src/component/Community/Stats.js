import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function stats() {
  return (
    <>
      <br />
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Upcoming Events</Card.Header>
                <Card.Body>
                    <Card.Text>
                    1. 2nd June 2022 : Maharana Pratap Jayanti
                    </Card.Text>
                    <Card.Text>
                    2. 5th June 2022 : World Environment Day
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <br />
    </>
  )
}

export default stats