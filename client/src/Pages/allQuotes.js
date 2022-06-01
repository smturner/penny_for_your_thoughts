import React from 'react';

import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';

const AllQuotes = () => {
    return (
        <div>
            

            
            <Card className="text-dark">
                <Card.Header>User</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        <Button variant="outline-info">Follow User</Button>{' '}
                    </blockquote>
                </Card.Body>
            </Card>

            <Card className="text-dark">
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        <Button variant="outline-info">Follow User</Button>{' '}
                    </blockquote>
                </Card.Body>
            </Card>

            <Card className="text-dark">
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        <Button variant="outline-info">Follow User</Button>{' '}
                    </blockquote>
                </Card.Body>
            </Card>

            <Card className="text-dark">
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                        <Button variant="outline-info">Follow User</Button>{' '}
                    </blockquote>
                </Card.Body>
            </Card>
        </div>

    )
}

export default AllQuotes;