import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUOTE } from '../utils/mutations';
import { QUERY_QUOTES, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Card, Form, Button} from 'react-bootstrap';

const CreateQuote = () => {
    // const [quoteText, setQuoteText] = useState('');
    // const [quoteAuthor, setQuoteAuthor] = useState('');

    // const [addQuote, { error }] = useMutation(ADD_QUOTE, {
    //     update (cache, {data: { addQuote }}) {
    //         try{
    //             const { quotes } = cache.readQuery({ query: QUERY_QUOTES });

    //             cache.writeQuery({
    //                 query: QUERY_QUOTES,
    //                 data: { quotes: [addQuote, ...quotes]}
    //             });
            
    //         } catch (e) {
    //             console.error(e)
    //         }

    //         const { me } = cache.readQuery({ query: QUERY_ME });
    //         cache.writeQuery({
    //             query: QUERY_ME,
    //             data: { me: { ...me, quotes: [ ...me.quotes, addQuote]}}
    //         })
    //     }
    // });

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     try{
    //         const { data } = await addQuote ({
    //             variables: { quoteText, quoteAuthor, thoughtPoster: Auth.getProfile().data.userName},
    //         });

    //         setQuoteText ('')
    //     }catch (err) {
    //         console.error(err);
    //     }
        
    // };

    // const handleChange = (event) => {
    //     const { name, value} =event.target;

    //     if(name=== 'quoteText' && name === 'quoteAuthor') {
    //         setQuoteText(value);
    //         setQuoteAuthor(value);
    //     }
    // }

    return (
        <div>
            <Card className= "text-dark">
                <Card.Header>Penny For Your Thoughts</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Create a Quote</Form.Label>
                            <Form.Control type="text" placeholder="Enter Quote Text" />
                            <Form.Text className="text-muted">
                                
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Please enter the Author" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>

    )
}

export default CreateQuote;
