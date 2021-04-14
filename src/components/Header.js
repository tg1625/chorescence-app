import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props){
    super(props);
    console.log("Re render");
    this.state = {
      links: [{name: ""}]
    };
    //Set up links
    if(this.props.loggedIn){
      this.state.links = [
        {name: "Home", a: "/"},
        {name: "Profile", a: "#"},
        {name: "Sign Out", a: "#"}
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
        {name: "Profile", a: "#"},
        {name: "Sign Out", a: "#"}
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

Header.propTypes = {
  loggedIn: PropTypes.bool
};

export default Header;