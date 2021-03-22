import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
        <form className="forms" onSubmit={function Login(){console.log('Submit');}}>
        <h3>Login</h3>
        <label htmlFor="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email"/>
        <label htmlFor="loginPassword">Password</label>
        <input type="password" name="loginPassword" placeholder="Password"/>
        <button type="submit">Submit</button>
    </form>
    )
  }
}

export default LoginForm;