import React, {Component} from 'react';
import axios from 'axios';
import {Container, Form, Button} from 'react-bootstrap';

class JoinGroup extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
}

  handleSubmit(event){
    console.log("Joining", `${process.env.REACT_APP_API_URL}/group/join/?id=${event.target.code.value}&userid=${JSON.parse(this.props.userInfo).id}`)
    axios.patch(`${process.env.REACT_APP_API_URL}/group/join/?id=${event.target.code.value}&userid=${JSON.parse(this.props.userInfo).id}`, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    }).
    then((response) => {
        console.log(response);
        window.location.href = "/dashboard";
    }).
    catch((error) => {
        console.log(error);
    })
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