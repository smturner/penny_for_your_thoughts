import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const {name, value } = event.target;
    setFormState({
      ...formState, 
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) =>{
    event.preventDefault();
    console.log(formState);

    try{
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    }catch (e) {
      console.error(e);
    }
  };

      return (
      <form onSubmit={handleFormSubmit}>
        <h1>Sign Up</h1>
        <div className="mb-3">
          <label>Username</label>
          <input
            name="userName"
            type="text"
            value={formState.userName}
            className="form-control"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            value={formState.email}
            className="form-control"
            placeholder="Enter email"
            onChange= {handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value= {formState.password}
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-warning editBtn">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }

  export default Signup;