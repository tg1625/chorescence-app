import logo from './logo.svg';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './styles/App.css';
import Header from './components/Header';
import Index from './pages/Index';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div className="siteWrapper">
        <Header />
        {/* Routing for the pages */}
        <Router>
          <Switch>
            {/* Homepage route  */}
            <Route exact path="/">
              <Index></Index>
            </Route>
            {/* Login route  */}
            <Route exact path="/login">
              <Login/>
            </Route>
            {/* Sign Up Path  */}
            <Route exact path="/signup">
              
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;