import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="mr-auto">Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex w-100 justify-content-end">
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Vision Mission
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="ml-3">Our Work</Nav.Link>
            <Nav.Link href="#link" className="ml-3">Our Team</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#link" className="mr-4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
