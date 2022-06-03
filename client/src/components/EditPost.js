import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap'
import CreateQuote from "../Pages/createQuote"
import { Card, Form, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_QUOTE } from '../utils/queries'
import { UPDATE_QUOTE }from '../utils/mutations'
import { useMutation } from '@apollo/client';

function EditPost(props) {
    console.log("id ", props.props.id)
    // const [showModal, setShowModal] = useState(false);
    const [updateQuote, { error }] = useMutation(UPDATE_QUOTE);
    const [quoteText, setQuoteText] = useState(props.props.text);
    const [quoteAuthor, setQuoteAuthor] = useState(props.props.author);


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const { data } = await updateQuote({
                 variables: { quoteId: props.props.id,
                              quoteText, 
                              quoteAuthor},
            });

            window.location.reload();

        }catch (err) {
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
        <Card.Body>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Edit Quote</Form.Label>
                    <Form.Control

                        name="quoteText"
                        value= {quoteText}
                        type="text"
                        placeholder={quoteText}
                        onChange={handleChange} />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Edit Author</Form.Label>
                    <Form.Control
                        name="quoteAuthor"
                        value= {quoteAuthor}
                        onChange={handleChange}
                        type="text" placeholder={quoteAuthor} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </Card.Body>
    )
}


export default EditPost;



