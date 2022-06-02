import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUOTE } from '../utils/mutations';
import { QUERY_QUOTES, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Card, Form, Button } from 'react-bootstrap';

const CreateQuote = () => {
    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    console.log(quoteText, quoteAuthor)
    const [addQuote, { error }] = useMutation(ADD_QUOTE,
        {
            update(cache, { data: { addQuote } }) {
                try {
                    const { quotes } = cache.readQuery({ query: QUERY_QUOTES,
                    variables: {
                    quoteText, quoteAuthor
                    } });
                    console.log(quotes)
                    cache.writeQuery({
                        query: QUERY_QUOTES,
                        data: { quotes: [...quotes, addQuote] }
                    });

                } catch (e) {
                    console.error(e)
                }

                // const { me } = cache.readQuery({ query: QUERY_ME });
                // cache.writeQuery({
                //     query: QUERY_ME,
                //     data: { me: { ...me, quotes: [...me.quotes, addQuote] } }
                // })
            }
        });

    // console.log(addQuote)
    // 

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addQuote({
                variables: { quoteText, quoteAuthor, quotePoster: Auth.getProfile().data.userName },
            });
            console.log(data)

            setQuoteText('')
            setQuoteAuthor('')
        } catch (err) {
            console.error(err);
        }

    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'quoteText') {
            setQuoteText(value);
        }
        if (name === 'quoteAuthor') {
            setQuoteAuthor(value);
        }
    }

    return (
        <>
            <Card className="text-dark">
                <Card.Header>Penny For Your Thoughts</Card.Header>

                <Card.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Create a Quote</Form.Label>
                            <Form.Control
                                name="quoteText"
                                value={quoteText}
                                type="text"
                                placeholder="Enter Quote Text"
                                onChange={handleChange} />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                name="quoteAuthor"
                                value={quoteAuthor}
                                onChange={handleChange}
                                type="text" placeholder="Please enter the Author" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Card.Body>

            </Card>


        </>

    )

}

export default CreateQuote;