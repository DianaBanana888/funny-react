import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginAC, logOutAC } from '../store/action';

export default function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((state) => state);

  function validateForm() {
    return email.length > 0 && name.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginAC(name, email));
  }

  function logoutForm() {
    dispatch(logOutAC());
  }

  return (
    !isAuthorized
      ? (
        <div className="login">
          <Form onSubmit={handleSubmit}>

            <Form.Group size="lg" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Login
            </Button>

          </Form>
        </div>
      )
      : (
        <div className="logout">
          <div> You can enjoy the app now!</div>
          <br />
          <Button block size="lg" type="submit" onClick={logoutForm}>
            Logout
          </Button>

        </div>
      )
  );
}
