import React, { Component } from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Header extends Component {
    state = {  } 
    render() { 
        return (
                <Navbar bg="light" style={{width: "100%"}}>
                    <Container fluid >
                    <Navbar.Brand style={{marginLeft: "50px"}}>Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/signin">Sign in</Nav.Link>
                            <Nav.Link href="/signup">Sign up</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>


                
        );
    }
}
 
export default Header;