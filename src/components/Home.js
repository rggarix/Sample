import React from 'react';
import {Container, ListGroup, Row} from 'react-bootstrap';

function Home(props) {
    return (
        <div>
            <Container fluid>
            <Row>
            <h1>Today's Top 5 to Buy:</h1>
            </Row>
            <Row>
            <ListGroup>
                <ListGroup.Item>NLOK    -    6.6</ListGroup.Item>
                <ListGroup.Item>OXY     -    5.5</ListGroup.Item>
                <ListGroup.Item>FANG    -    3.9</ListGroup.Item>
                <ListGroup.Item>VLO     -    3.9</ListGroup.Item>
                <ListGroup.Item>NLOK    -    6.6</ListGroup.Item>
            </ListGroup>
            </Row>
            
            <br/>
            <br/>
            <Row>
            <h1>Today's Top 5 to Sell:</h1>
            </Row>
            <Row>
            <ListGroup>
                <ListGroup.Item>NLOK    -    6.6</ListGroup.Item>
                <ListGroup.Item>NLOK    -    6.6</ListGroup.Item>
                <ListGroup.Item>NLOK    -    6.6</ListGroup.Item>
                <ListGroup.Item>NLOK    -    6.6</ListGroup.Item>
                <ListGroup.Item>NLOK    -    6.6</ListGroup.Item>
            </ListGroup>
            </Row>
            </Container>
        </div>
    );
}

export default Home;