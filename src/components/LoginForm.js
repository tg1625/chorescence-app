import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {Form, Button, Alert} from 'react-bootstrap';
import axios from 'axios';

/**
 * Form to handle Login 
 */
class LoginForm extends Component {
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
    const email = encodeURIComponent(event.target.email.value);
    const password = encodeURIComponent(event.target.password.value);
    console.log("Sending", email, password);
    axios.get(`${process.env.REACT_APP_API_URL}/login/?email=${email}&password=${password}`).
    then((response) => {
        console.log(response);
        if(response !== {}){
          localStorage.setItem('user', JSON.stringify(response.data));
          this.setState({loggedIn : true});
          window.location.href = "/dashboard";
        }
        else{
          this.setState({showError: true});
        }
    }).
    catch((error) => {
        console.log(error);
    })
    event.preventDefault();
  }

  render() {
    if(this.state.loggedIn){
      return <Redirect to="/" />
    }
    return (
      <>
      {this.state.showError &&
          <Alert variant="danger">Incorrect email or password</Alert>
      }
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password">
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
    </>
    )
  }
}

export default LoginForm;