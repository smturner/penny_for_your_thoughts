import React from 'react';
import { Card } from 'react-bootstrap';

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
        <div className="main">

            {showTitle && <h3>{title}</h3>}
            {quotes && quotes.map((quotes) => (
                <Card className="text-light mb-3 myQuotes">
                    <Card.Header>Posted by: {quotes.quotePoster.userName} on {quotes.createdAt}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                "{quotes.quoteText}"

                            </p>
                            <footer className="blockquote-footer">
                                {quotes.quoteAuthor}</footer>
                        </blockquote>
                    </Card.Body>
                    <Card.Footer>
                        <LikeButton />
                    </Card.Footer>


                </Card>
            ))}

        </div>

    )
}

export default Quote