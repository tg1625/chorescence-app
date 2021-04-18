import React, {Component} from 'react';
import SignUpForm from '../components/SignUpForm';
import {Container} from 'react-bootstrap';

class SignUp extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Container>
        <h1>Create an Account</h1>
        <p>Create your own Chorescence account! It's free and only takes a minute. </p>
            <SignUpForm/>
      </Container>
    );
  }
}

export default SignUp;