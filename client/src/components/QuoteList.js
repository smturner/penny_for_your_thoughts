import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Quote = ({
    users,
    title,
    showTitle = true,
}) => {
    console.log(users)
    if (!users.length) {
        return <h3>You have not created quotes yet</h3>
    }


    return (
        <>
        {showTitle && <h3>{title}</h3>}
        {users && users.map((user) => (
            <Card className="text-dark mb-3">
                <Card.Header>ALL QUOTESPosted by: {user.UserName}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            '{user.quotes.quoteText}'
                         
                        </p>
                        <footer className="blockquote-footer">
                        {user.quotes.quoteAuthor}</footer>
                        
                    </blockquote>
                </Card.Body>
            </Card>
        ))}
            
        </>

    )
}

export default Quote