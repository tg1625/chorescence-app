import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render() {
    return (
        <div className="mainWrapper">
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
  }
}

export default Login;