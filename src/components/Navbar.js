import React from 'react'
import {Navbar, Button, Form, Nav, FormControl, Container,Row} from 'react-bootstrap';
import Logo from '../Images/Vector2.png'
import { NavLink } from 'react-router-dom';


function navbar() {
    return (
    <div>
        <Navbar bg="dark" variant="dark">
            <NavLink to="/"><Navbar.Brand href="">
                <img src={Logo} height="30px" alt="React Bootstrap logo" style={{ paddingRight: '10px'}} />
                G A R G L E T
                </Navbar.Brand></NavLink>
            <Nav className="mr-auto">
                <Nav.Link><NavLink to="/"><span style={{ color : 'white'}}>Home</span></NavLink></Nav.Link>
                <Nav.Link><span style={{ color : 'white'}}>Jobs</span></Nav.Link>
                <Nav.Link><NavLink to="/tickers"><span style={{ color : 'white'}}>Ticker List</span></NavLink></Nav.Link>
                <Nav.Link><span style={{ color : 'white'}}>Models</span></Nav.Link>
                <Nav.Link><span style={{ color : 'white'}}>News</span></Nav.Link>
                <Nav.Link><span style={{ color : 'white'}}>Teams</span></Nav.Link>
                <Nav.Link><NavLink to="/charts"><span style={{ color : 'white'}}>Chart</span></NavLink></Nav.Link>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form> */}
        </Navbar>
    </div>
    )
}

export default navbar;