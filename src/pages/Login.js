import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  constructor(props){
    super(props)
  }
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