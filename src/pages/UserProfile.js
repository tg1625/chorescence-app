import React, {Component} from 'react';
import {Container, Row, Col, ListGroup} from 'react-bootstrap';

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
        userInfo: JSON.parse(localStorage.getItem("user"))
    };
  }

  render() {
    return (
      <Container>
          <Row><Col><h1>Profile</h1></Col></Row>
          <Row>
              <Col>
                <ListGroup>
                    <ListGroup.Item>
                        <h5>Name</h5>
                        {this.state.userInfo.fname} {this.state.userInfo.lname}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Username</h5>
                        {this.state.userInfo.username}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Email</h5>
                        {this.state.userInfo.email}
                    </ListGroup.Item>
                </ListGroup>
              </Col>
          </Row>
      </Container>
    );
  }
}

export default UserProfile;