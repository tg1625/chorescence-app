import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import LoginForm from '../components/LoginForm';
import {Container} from 'react-bootstrap';

class Logout extends Component {
  constructor(props){
    super(props);
    console.log("Loggin out");
    localStorage.setItem('user', JSON.stringify({}));
  }

render() {
    localStorage.setItem('user', JSON.stringify({}));
    return (
        <Redirect to="/"/>
    );
  }
}

export default Logout;