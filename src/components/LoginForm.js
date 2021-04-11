import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class LoginForm extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button type="submit" block>
          Submit
        </Button>
    </Form>
    //     <form className="forms" onSubmit={() => console.log("Submit login")}>
    //     <h3>Login</h3>
    //     <label htmlFor="loginEmail">Email</label>
    //     <input type="email" name="loginEmail" placeholder="Email"/>
    //     <label htmlFor="loginPassword">Password</label>
    //     <input type="password" name="loginPassword" placeholder="Password"/>
    //     <button type="submit">Submit</button>
    // </form>
    )
  }
}

export default LoginForm;