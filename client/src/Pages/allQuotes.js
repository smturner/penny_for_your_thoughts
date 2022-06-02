import React from 'react';

import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import MainNav from '../components/navbar/navbar';


const AllQuotes = () => {
    return (
        <div>
            <MainNav />
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by User"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Get Quotes
                </Button>
            </InputGroup>

            <Card className="text-dark mb-3">
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

            <Card className="text-dark mb-3">
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

        </div>

    )
}

export default AllQuotes;