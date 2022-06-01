import React from 'react';

import {Navbar, Nav, Container} from 'react-bootstrap'

const MainNav = () => {
    return (
        <header>
            <Navbar fixed="top" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Penny For Your Thoughts</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/create">Creat Quotes</Nav.Link>
        <Nav.Link href="/viewAll">View Quotes</Nav.Link>
        <Nav.Link href="/user">Your Quotes</Nav.Link>
        

        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    );
};

export default MainNav;