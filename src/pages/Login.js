import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';
import {Container} from 'react-bootstrap';

class Login extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Container>
        <h1>Login</h1>
            <LoginForm/>
      </Container>
    );
  }
}

export default Login;