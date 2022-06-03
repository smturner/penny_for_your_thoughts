import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import LikeButton from './LikeButton'
const Quote = ({
    quotes,
    title,
    showTitle = true,
}) => {
    console.log(quotes)
    if (!quotes.length) {
        return <h3>You have not created quotes yet</h3>
    }


    return (
        <>
        {showTitle && <h3>{title}</h3>}
        {quotes && quotes.map((quotes) => (
            <Card className="text-dark mb-3">
                <Card.Header>Posted by: {quotes.quotePoster}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            '{quotes.quoteText}'
                         
                        </p>
                        <footer className="blockquote-footer">
                        {quotes.quoteAuthor}</footer>
                    </blockquote>
                </Card.Body>
                <LikeButton />

            </Card>
        ))}
            
        </>

    )
}

export default Quote