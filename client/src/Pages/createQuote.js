import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUOTE } from '../utils/mutations';
import { Card, Form, Button} from 'react-bootstrap';

import '../css/home.css'

const CreateQuote = ({setShowModal}) => {
    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    const [addQuote, { error }] = useMutation(ADD_QUOTE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
            const { data } = await addQuote({
                variables: {
                    quoteText,
                    quoteAuthor }
            });
            window.location.reload()

            setQuoteText ('')
            setQuoteAuthor ('')
        } catch (err) {
            console.error(err);
        }
        
    };

    const handleChange = (event) => {
        const { name, value} =event.target;

        if(name === 'quoteText') {
            setQuoteText(value);
        }
        if(name === 'quoteAuthor'){
            setQuoteAuthor(value);
        }
    }

    return (
        <>
            <Card className= "text-light bg-dark">
                <Card.Header>Create A New Quote</Card.Header>
                {/* {Auth.loggedIn() ? ( */}

                <Card.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Create a Quote</Form.Label>
                            <Form.Control 
                            name="quoteText" 
                            value= {quoteText}
                            type="text" 
                            placeholder="Enter Quote Text"
                            onChange= {handleChange} />
                            <Form.Text className="text-muted">
                                
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                            name= "quoteAuthor"
                            value= {quoteAuthor}
                            onChange={handleChange} 
                            type="text" placeholder="Please enter the Author" />
                        </Form.Group>
                        
                        <Button className="createQuote"  variant="success" type="submit">
                            Submit
                        </Button>
                        
                    </Form>
                   
                </Card.Body> 
                {/* )} */}

                
                  
               
            </Card>

  
        </>
    
    )
    
}

export default CreateQuote;