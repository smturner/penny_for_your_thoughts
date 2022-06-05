import React, {useState} from 'react';
import Auth from '../utils/auth';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap'
import CreateQuote from "../Pages/createQuote"
  
  const MainNav = () => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Navbar fixed="top"  bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Penny For Your Thoughts</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
      
                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link href="/home">Homepage</Nav.Link>
                    <Nav.Link href="/viewAll">View Quotes</Nav.Link>
                    <Nav.Link href="/user">Your Quotes</Nav.Link>
                    <Nav.Link onClick={() => setShowModal(true)}>Create Quotes</Nav.Link>

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
                  <CreateQuote  handleModalClose={() => setShowModal(false)}  />
            </Modal.Body>
          </Tab.Container>
        </Modal>
      </>
    );
  };

  export default MainNav;