import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Quote = ({
    quotes,
    title,
    showTitle = true,
}) => {
    if (!quotes.length) {
        return <h3>You have not created quotes yet</h3>
    }


    return (
        <>
        {showTitle && <h3>{title}</h3>}
        {quotes && quotes.map((quote) => (
            <Card className="text-dark mb-3">
                <Card.Header>ALL QUOTESPosted by: {quote.quotePoster}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            '{quote.quoteText}'
                         
                        </p>
                        <footer className="blockquote-footer">
                        {quote.quoteAuthor}</footer>
                        
                    </blockquote>
                </Card.Body>
            </Card>
        ))}
            
        </>

    )
}

export default Quote