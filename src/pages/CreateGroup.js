import React, {Component} from 'react';
import axios from 'axios';
import {Container, Form, Button} from 'react-bootstrap';

class CreateGroup extends Component {
  handleSubmit(event){
    event.preventDefault();
    console.log(event.target.groupName.value);
    //replaces spaces/characters with the correct code 
    const groupName = encodeURIComponent(event.target.groupName.value.trim());

    axios.post(`https://chorescence-api.herokuapp.com/group/create/?userid=${groupName}`). 
    then((response) => {
        console.log(response);
    }).
    catch((error) => {
        console.log(error);
    })
  }

  render() {
    return (
      <Container>
        <h1>Create a Group</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="groupName">
            <Form.Label>What's your group's name?</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Group Name"></Form.Control>
          </Form.Group>
          <Button type="submit" block>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default CreateGroup;