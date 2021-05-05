import React, {Component} from 'react';
import {Container, Button, Jumbotron} from 'react-bootstrap';

class Index extends Component {
  render() {
    return (
      <Container fluid style={{padding:0}}>
        <div className="splashImg">
          <div className="text">
              <h1>Chorescence</h1>
              <hr/>
              <p>The easy way for roomates to split up chores</p>
          </div>
        </div>
        <Jumbotron>
        <h1>Chores made easier</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Button type="primary" href="/signup">Join Now</Button>
        </Jumbotron>  
      </Container>
    );
  }
}

export default Index;