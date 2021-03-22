import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
            <h2><a href="/">Chorescence</a></h2>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
          </ul>
      </nav>
      </header>
    );
  }
}

export default Header;