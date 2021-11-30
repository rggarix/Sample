// import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import {Container,Col, ListGroup, Row, Button} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function TickersList(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/tickers/')
        .then( response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <div>
            {/* <ol>
            {data.map(data => (
                <li>{data.name}</li>
            ))}
            </ol> */}
            <br/>
            <ListGroup variant="flush">
                <Container fluid>
            {data.map(data => (
                <>
                <ListGroup.Item style={{backgroundColor: 'grey'}} key={data.id}>
                    <Row>
                    <Col md={10}>
                    {data.name}
                    </Col>
                    <Col md={2}>
                        {/* <NavLink to='/stockcharts'><Button>Chart</Button></NavLink> */}
                        <Link to={{
                            pathname: '/charts',
                            state: {
                                name : 'rajat'
                            }
                        }}><Button variant="dark">Chart</Button></Link>
                    </Col>
                    </Row>
                </ListGroup.Item>
                <br></br>
                </>
            ))}
            </Container>
            </ListGroup>
        </div>
    );
}

export default TickersList;