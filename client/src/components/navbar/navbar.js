import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap'
import CreateQuote from "../../Pages/createQuote"
import '../../css/navbar.css'


const MainNav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar id='navbar' fixed="top" bg="light" expand="lg">
        <Container className='navContainer'>
          <Navbar.Brand className='brand' href="/">"Penny For Your Thoughts"</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* 
        <Nav.Link href="/viewAll">View Quotes</Nav.Link>
        <Nav.Link href="/user">Your Quotes</Nav.Link>
        <Nav.Link href="/home">Homepage</Nav.Link> */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/viewAll">All Quotes</Nav.Link>
                  <Nav.Link href="/user">My Quotes</Nav.Link>
                  {/* <Nav.Link href="/create">Create Quotes</Nav.Link> */}
                  <Nav.Link onClick={() => setShowModal(true)}>Create Quote</Nav.Link>


                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link href="/">Login</Nav.Link>
              )}


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        <Tab.Container defaultActiveKey='createQuote'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>

              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Tab.Content> */}
            {/* <Tab.Pane eventKey='createQuote'> */}
            <CreateQuote handleModalClose={() => setShowModal(false)} />
            {/* </Tab.Pane> */}

            {/* </Tab.Content> */}
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default MainNav;