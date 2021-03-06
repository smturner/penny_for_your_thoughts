import React, { Component, useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  

  
  
    return (
      <form onSubmit={handleFormSubmit}>


        

        <h1>Sign In</h1>

        <div className="mb-3">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
          
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-warning editBtn">
            Submit
          </button>
          <p className="">
          Haven't signed up? <a href="/sign-up">sign in here</a>
        </p>
        </div>
       
      </form>
    );
};

export default Login; 