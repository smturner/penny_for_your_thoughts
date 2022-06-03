import React, {useState} from 'react';
import { Card, Modal,Tab, Nav, Button } from 'react-bootstrap';
import { useQuery, useMutation} from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { DELETE_QUOTE } from '../utils/mutations';
import { Route,Link } from 'react-router-dom'
import EditPost from "../components/EditPost"
import CreateQuote from '../Pages/createQuote';
import Auth from '../utils/auth';
// import userQuotes from '../pages/userQuotes'


const UserQuoteList = ({
    quotes,
    username,
    title,
    
    
}) => {

const [deleteQuote, { error }] = useMutation(DELETE_QUOTE);

    const [showModal, setShowModal] = useState(false);

    if (!quotes.length) {
        return <h3>No Quotes to Show</h3>
    }

 

  
    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    const handleDelete = async (quoteId) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        const { data } = await deleteQuote({variables: { quoteId: quoteId }});
  console.log(data)
        if(!data) {
          throw new Error('something went wrong!');
        }
  window.location.reload()
        // upon success, remove quote's id from localStorage
      } catch (err) {
        console.error(err);
      }
    };
  
  


    return (
        <>
        <br/>
        <br/>
        <br/>
        {<h1>{title}</h1>}
        {quotes && quotes.map((quote) => (
            <Card className="text-dark mb-3">
                <Card.Header>Posted by: {username} on {quote.createdAt}</Card.Header>
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
                        <Button onClick= {() => handleDelete(quote._id)} variant="outline-danger">Delete</Button>

{/* <p onClick={() => userQuotes(quote.id)}> 🗑️</p> */}
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