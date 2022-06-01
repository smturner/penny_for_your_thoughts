import React from 'react';

import { Card, Form, Button} from 'react-bootstrap';

const CreateQuote = () => {
    return (
        <div>
            <Card className= "text-dark">
                <Card.Header>Penny For Your Thoughts</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Create a Quote</Form.Label>
                            <Form.Control type="text" placeholder="Enter Quote Text" />
                            <Form.Text className="text-muted">
                                
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Please enter the Author" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>

    )
}

export default CreateQuote;
