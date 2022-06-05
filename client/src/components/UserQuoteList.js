import React, {useState} from 'react';
import { Card, Modal, Tab, Nav, Button } from 'react-bootstrap';
import { useQuery, useMutation} from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { DELETE_QUOTE } from '../utils/mutations';
import { Route,Link } from 'react-router-dom'
import EditPost from "../components/EditPost"
// import CreateQuote from '../Pages/createQuote';
import Auth from '../utils/auth';
// import userQuotes from '../pages/userQuotes'


const UserQuoteList = ({
    quotes,
    username,
    title,
    }) => {

const [deleteQuote, { error }] = useMutation(DELETE_QUOTE);
const [showModal, setShowModal] = useState(false);
const [modalInfo, setModalInfo] = useState({text: '', author: '', id: ''})

    if (!quotes.length) {
        return <h3>No Quotes to Show</h3>
    }

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

} catch (err) {
        console.error(err);
      }
    };

    return (
        <>
      <div className="space"></div>
        {<h3>{title}</h3>}
        {quotes && quotes.map((quote) => (
            <Card className="text-light mb-3 myQuotes">
                <Card.Header className="text-light">Posted by: You on {quote.createdAt}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            "{quote.quoteText}"
                        </p>
                        <footer className="blockquote-footer">
                         {quote.quoteAuthor}
                        </footer>

                        <Card.Footer>
                        {/* <Link to= {{ pathname: `create/edit/${quote._id}`}}
                        className="outline-secondary">Edit</Link> */}
                           <Button className="editBtn" variant="info" onClick={() => {
                             setModalInfo({text: quote.quoteText, author: quote.quoteAuthor, id: quote._id})
                             setShowModal(true)}}> Edit</Button>
                        {/* <Button variant="outline-secondary">Edit</Button>{' '} */}
                        <Button className="editBtn" onClick= {() => handleDelete(quote._id)} variant="danger">Delete</Button>
                        </Card.Footer>
                    </blockquote>
                </Card.Body>
            </Card>
            
        ))}
        <Modal 
        className= "modalCreate"
    
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
        <Tab.Content>
          <Tab.Pane eventKey='createQuote'>
            {console.log("modalInfo inside post: ", modalInfo)}
            <EditPost props={modalInfo} handleModalClose={() => setShowModal(false)} />
          </Tab.Pane>
       
        </Tab.Content>
      </Modal.Body>
    </Tab.Container>
    </Modal>
            
        </>

    )
}

export default UserQuoteList