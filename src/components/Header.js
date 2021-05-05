import React, {Component} from 'react';
import {Button, Navbar, Nav} from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Header and navigation bar 
 */
class Header extends Component {
  static propTypes = {
    logoutFunction: PropTypes.func,
    loggedIn: PropTypes.bool
  };

  constructor(props){
    super(props);
  }

  render() {
    // loadLinks();
    console.log("Header login:", this.props.loggedIn);
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/"><strong>Chorescence</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
              {/* Not Logged in */}
              {!this.props.loggedIn && <Nav.Link href="/login">Login</Nav.Link>}
              {!this.props.loggedIn && <Nav.Link href="/signup">Sign Up</Nav.Link>}

              {/* Logged In */}
              {this.props.loggedIn && <Nav.Link href="/profile">Profile</Nav.Link>}
              {this.props.loggedIn && <Nav.Link as={Button} variant="link" onClick={this.props.logoutFunction}>Logout</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;