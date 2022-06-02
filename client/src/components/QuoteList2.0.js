import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Quote = ({
    quotes,
    title,
    showTitle = true,
}) => {
    if (!quotes.length) {
        return <h3>No Quotes to Show</h3>
    }


    return (
        <>
        {showTitle && <h3>{title}</h3>}
        {quotes && quotes.map((quote) => (
            <Card className="text-dark mb-3">
                <Card.Header>Posted by1: {quote.quotePoster}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            '{quote.quoteText}'
                       
                        </p>
                        <footer className="blockquote-footer">
                         
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

export default Quote