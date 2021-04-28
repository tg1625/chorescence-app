import React, {Component} from 'react';
import {Form, Button, Col} from 'react-bootstrap';

/**
 * Form to handle sign up
 */
class SignUpForm extends Component {
  render() {
    return (
        <Form>
        <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
        <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
      
          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
      
        <Button variant="primary" type="submit" block>
          Sign Up
        </Button>
      </Form>
    )
  }
}

export default SignUpForm;