import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

class CreateGroup extends Component {
  static propTypes = {
    userInfo: PropTypes.object
  };

  constructor(props){
    super(props);
    console.log("Props for create are", props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    const data = {
      userId: JSON.parse(this.props.userInfo).id,
      groupName : event.target.groupName.value
    };
    console.log(JSON.parse(this.props.userInfo));
    console.log("Sending", data)
    axios.post(`${process.env.REACT_APP_API_URL}/group/create`, data, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    }).
    then((response) => {
        console.log(response);
        window.location.href = "/";
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
        <Row>
          <Link to={`/`}>{"<"} Back to Groups</Link>
        </Row>
        <Row>
          <Col>
          <h1>Create a Group</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="groupName">
                <Form.Label>What's your group's name?</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Group Name"></Form.Control>
              </Form.Group>
              <Button type="submit" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateGroup;