import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUOTE } from '../utils/mutations';
import { QUERY_QUOTES, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Card, Form, Button} from 'react-bootstrap';
import MainNav from '../components/navbar/navbar';
import { Route,Link } from 'react-router-dom'

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const CreateQuote = ({setShowModal}) => {
    // const [showModal, setShowModal] = useState(false);

    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    const [addQuote, { error }] = useMutation(ADD_QUOTE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // console.log("EVENT TRIGGERED") worked
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
                    {/* <MainNav /> */}

            <Card className= "text-dark">
                <Card.Header>"Penny For Your Thoughts"</Card.Header>
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
                        
                        <Button  variant="primary" type="submit">
                            Submit
                        </Button>
                            {/* <Link to='/home'  variant="primary" type="submit">
                            Submit
                        </Link> */}
                    </Form>
                   
                </Card.Body>
                {/*  )} */}
               
            </Card>

  
        </>
    
    )
    
}

export default CreateQuote;