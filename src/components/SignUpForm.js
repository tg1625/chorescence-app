import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, Col} from 'react-bootstrap';

/**
 * Form to handle sign up
 */
class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      showError: false,
      loggedIn : false,
      errorMsg : 'Incorrect email or password'
    }
  }

  handleSubmit(event){
    const data = {
      username: encodeURIComponent(event.target.username.value),
      password: encodeURIComponent(event.target.password.value),
      lname : event.target.lname.value,
      fname : event.target.fname.value,
      email: encodeURIComponent(event.target.email.value)
    };
    console.log("Sending", data)
    axios.post(`${process.env.REACT_APP_API_URL}/user/create`, data, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    }).
    then((response) => {
        console.log(response);
        window.location.href = "/";
    }).
    catch((error) => {
        console.log(error);
    })
    event.preventDefault();
      // alert('You have submitted the form.');
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="fname">
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="lname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
        </Form.Group>
      
        <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
         </Form.Group>
      
        <Button variant="primary" type="submit" block>
          Sign Up
        </Button>
      </Form>
    )
  }
}

export default SignUpForm;