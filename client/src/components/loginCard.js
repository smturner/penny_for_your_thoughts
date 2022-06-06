import React from 'react';
import { Button, Card } from 'react-bootstrap'
import '../css/login.css'

const LoginCard = () => {
    return (
        <div>
            <container className="mainbg">
                <row>
                    <col-12>
            <Card bg='light' className="text-center text-dark">
                <Card.Header className="brand">"Penny For Your Thoughts."</Card.Header>
                <Card.Body>

                    <Card.Text>
                        Click Login or Sign up to continue.
                    </Card.Text>
                    <Button className="editBtn btn-warning" href="/sign-in">Login</Button>
                    <Button className="editBtn btn-warning" href="/sign-up">Sign up</Button>
                 
                </Card.Body>

            </Card>
            
            </col-12>
            </row>
            </container>
        </div>
    );
};
export default LoginCard