import React from 'react';

import { Card, Form, Button} from 'react-bootstrap';
import MainNav from '../components/navbar/navbar';

const UserQuotes = () => {
    return (

        
        <div>
            <MainNav />
            <Card className= "text-dark mb-3">
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
                        <Button variant="outline-secondary">Edit</Button>{' '}
                        <Button variant="outline-danger">Delete</Button>{' '}
                    </blockquote>
                </Card.Body>
            </Card>

            <Card className="text-dark mb-3">
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
                        <Button variant="outline-secondary">Edit</Button>{' '}
                        <Button variant="outline-danger">Delete</Button>{' '}
                    </blockquote>

                </Card.Body>
            </Card>

            <Card className="text-dark mb-3">
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
                        <Button variant="outline-secondary">Edit</Button>{' '}
                        <Button variant="outline-danger">Delete</Button>{' '}
                    </blockquote>
                </Card.Body>
            </Card>


        </div>

    )
}

export default UserQuotes;