import React from 'react';
import {Button, Card} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from '../login/login.component'
import SignUp from '../login/signup.component'

const LoginCard = () => {
    return (
        <div>
            <Card bg='info' className="text-center">
  <Card.Header>Be sure to </Card.Header>
  <Card.Body>
    <Card.Title>Login or Signup</Card.Title>
    <Card.Text>
      Click Login or Sign up to continue.
    </Card.Text>
    <Button href="/sign-in">Login</Button>
    <Button href="/sign-up">Sign up</Button>
    <Router>
    <Routes>
              
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
            </Router>
  </Card.Body>
  
</Card>
        </div>
    );
};
export default LoginCard