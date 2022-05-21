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
                    1. 15th May 2022 : INTERNATIONAL DAY OF THE FAMILY
                    </Card.Text>
                    <Card.Text>
                    2. 17th May 2022 : NO TOBACCO DAY
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <br />
    </>
  )
}

export default stats