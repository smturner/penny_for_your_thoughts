import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const UserQuoteList = ({
    quotes,
    username,
    title,
    
}) => {
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
                        <Button variant="outline-secondary">Edit</Button>{' '}
                        <Button variant="outline-danger">Delete</Button>{' '}
                    </blockquote>
                </Card.Body>
            </Card>
        ))}
            
        </>

    )
}

export default UserQuoteList