import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap'

const MainNav = () => {
    return (
        <header>
            <Navbar fixed="top" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Penny For Your Thoughts</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/create">Create Quotes</Nav.Link>
        <Nav.Link href="/viewAll">View Quotes</Nav.Link>
        <Nav.Link href="/user">Your Quotes</Nav.Link>
        <Nav.Link href="/home">Homepage</Nav.Link>
        


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNav;