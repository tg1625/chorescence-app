import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

/**
 * Header and navigation bar 
 */
class Header extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool
  };

  constructor(props){
    super(props);
    this.state = {
      links: [{name: ""}]
    };
    //Set up links
    if(this.props.loggedIn){
      this.state.links = [
        {name: "Home", a: "/"},
        {name: "Profile", a: "/profile"},
        {name: "Sign Out", a: "/logout"}
      ];  
    }
    else{
      this.state.links = [
        {name: "Home", a:"/"},
        {name: "Login", a:"/login"},
        {name: "Sign Up", a:"/signup"}
      ]; 
    }
  }

  componentDidUpdate(prevProps){
    //Set up links
    if(this.props.loggedIn && !prevProps.loggedIn){
      this.setState({links: [
        {name: "Home", a: "/"},
        {name: "Profile", a: "/profile"},
        {name: "Sign Out", a: "/logout"}
      ]});  
    }
    else if (!this.props.loggedIn && !prevProps.loggedIn){
      this.setState({links: [
        {name: "Home", a:"/"},
        {name: "Login", a:"/login"},
        {name: "Sign Up", a:"/signup"}
      ]});  
    }
  }

  render() {
    // loadLinks();
    console.log("Header login:", this.props.loggedIn);
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/">Chorescence</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {this.state.links && this.state.links.map((l, i) => <Nav.Link href={l.a} key={i}>{l.name}</Nav.Link>)}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;