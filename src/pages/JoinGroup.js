import React, {Component} from 'react';
import {Container, Form, Button} from 'react-bootstrap';

class JoinGroup extends Component {
  handleSubmit(event){
    console.log(event.target.code.value);
    event.preventDefault();
    // alert('You have submitted the form.');
  }

  render() {
    return (
      <Container>
        <h1>Join a Group</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="code">
            <Form.Label>Enter a join code</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Join Code"></Form.Control>
          </Form.Group>
          <Button type="submit" block>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default JoinGroup;