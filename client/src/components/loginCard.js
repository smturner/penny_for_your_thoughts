import React from 'react';
import { Button, Card } from 'react-bootstrap'


const LoginCard = () => {
    return (
        <div>
            <Card bg='light' className="text-center text-dark">
                <Card.Header>Welcome to Penny For Your Thoughts!!</Card.Header>
                <Card.Body>

                    <Card.Text>
                        Click Login or Sign up to continue.
                    </Card.Text>
                    <Button href="/sign-in">Login</Button>
                    <Button href="/sign-up">Sign up</Button>
                 
                </Card.Body>

            </Card>
        </div>
    );
};
export default LoginCard