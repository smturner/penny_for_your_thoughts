import React, {useState} from 'react';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap'
import CreateQuote from "../Pages/createQuote"
import { Card, Form, Button} from 'react-bootstrap';
import {useQuery} from '@apollo/client';
import {QUERY_SINGLE_QUOTE} from '../utils/queries'
  
function EditPost() {
  // const [showModal, setShowModal] = useState(false);
const {loading, data} = useQuery(QUERY_SINGLE_QUOTE)
 const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    console.log(quoteText, quoteAuthor)
    // const [addQuote, { error }] = useMutation(ADD_QUOTE)


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // try{
        //     const { data } = await addQuote({
        //         variables: { quoteText, quoteAuthor, quotePoster: Auth.getProfile().date._id},
        //     });
        //     console.log(data)

        //     setQuoteText ('')
        //     setQuoteAuthor ('')
        // }catch (err) {
        //     console.error(err);
        // }
        
    };

    const handleChange = (event) => {
        const { name, value} =event.target;

        if(name=== 'quoteText') {
            setQuoteText(value);
        }
        if(name=== 'quoteAuthor'){
            setQuoteAuthor(value);
        }
    }  
  return(
    <Card.Body>
    <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Edit Quote</Form.Label>
            <Form.Control 
          
            name="quoteText" 
            // value= {quoteText}
            type="text" 
            placeholder="Enter Quote Text"
            onChange= {handleChange} />
            <Form.Text className="text-muted">
                
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Edit Author</Form.Label>
            <Form.Control
            name= "quoteAuthor"
            // value= {quoteAuthor}
            onChange={handleChange} 
            type="text" placeholder="Please enter the Author" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
   
</Card.Body>
    )}


export default EditPost;

 

