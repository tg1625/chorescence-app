import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    console.log("Re render");
    // this.state = {
    //   loggedIn: this.props.loggedIn
    // };
  }
  render() {
    console.log("Header login:", this.props.loggedIn);
    return (
      <header>
        <nav>
            <h2><a href="/">Chorescence</a></h2>
          <ul>
            {/* Links if not logged in */}
              {!this.props.loggedIn && <li><a href="/">Home</a></li>}
              {!this.props.loggedIn && <li><a href="/login">Login</a></li>}
              {!this.props.loggedIn && <li><a href="/signup">Sign Up</a></li>}

              {/* Links if logged in  */}
              {this.props.loggedIn && <li><a href="/dashboard">Home</a></li>}
              {/* {this.props.loggedIn && <li><a href="/login">Profile</a></li>} */}
              {/* {this.props.loggedIn && <li><a href="/logout">Logout</a></li>} */}
              
          </ul>
      </nav>
      </header>
    );
  }
}

export default Header;