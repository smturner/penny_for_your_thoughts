import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUOTE } from '../utils/mutations';
import { QUERY_QUOTES, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Card, Form, Button} from 'react-bootstrap';
import MainNav from '../components/navbar/navbar';


const CreateQuote = () => {
    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    console.log(quoteText, quoteAuthor)
    const [addQuote, { error }] = useMutation(ADD_QUOTE)


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const { data } = await addQuote({
                variables: { quoteText, quoteAuthor, quotePoster: Auth.getProfile().data.userName},
            });
            console.log(data)

            setQuoteText ('')
            setQuoteAuthor ('')
        }catch (err) {
            console.error(err);
        }
        
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

    return (
        <>
                    <MainNav />

            <Card className= "text-dark">
                <Card.Header>Penny For Your Thoughts</Card.Header>
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
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                   
                </Card.Body>
                {/*  )} */}
               
            </Card>

  
        </>
    
    )
    
}

export default CreateQuote;