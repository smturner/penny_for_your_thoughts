import React, {useState} from 'react';
import { Card, Modal,Tab, Nav, Button } from 'react-bootstrap';
import { Route,Link } from 'react-router-dom'
import EditPost from "../components/EditPost"
import CreateQuote from '../Pages/createQuote';


const UserQuoteList = ({
    quotes,
    username,
    title,
    
}) => {
    const [showModal, setShowModal] = useState(false);

    if (!quotes.length) {
        return <h3>No Quotes to Show</h3>
    }


    return (
        <>
        <br/>
        <br/>
        <br/>
        {<h1>{title}</h1>}
        {quotes && quotes.map((quote) => (
            <Card className="text-dark mb-3">
                <Card.Header>Posted by: {username}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            '{quote.quoteText}'
                        </p>
                        <footer className="blockquote-footer">
                         {quote.quoteAuthor}
                        </footer>
                        {/* <Link to= {{ pathname: `create/edit/${quote._id}`}}
                        className="outline-secondary">Edit</Link> */}
                           <Button variant="outline-secondary" onClick={() => setShowModal(true)}> Edit</Button>
                        {/* <Button variant="outline-secondary">Edit</Button>{' '} */}
                        <Button variant="outline-danger">Delete</Button>{' '}
                    </blockquote>
                </Card.Body>
            </Card>
            
        ))}
        <Modal
    
    size='lg'
    show={showModal}
    onHide={() => setShowModal(false)}
    aria-labelledby='signup-modal'>
    <Tab.Container defaultActiveKey='createQuote'>
      <Modal.Header closeButton> <h3>Edit Post</h3>
        <Modal.Title id='signup-modal'>
          <Nav variant='pills'>
         
          </Nav>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tab.Content>
          <Tab.Pane eventKey='createQuote'>
            <EditPost handleModalClose={() => setShowModal(false)} />
          </Tab.Pane>
       
        </Tab.Content>
      </Modal.Body>
    </Tab.Container>
    </Modal>
            
        </>

    )
}

export default UserQuoteList