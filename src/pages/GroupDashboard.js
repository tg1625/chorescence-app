import React, {Component} from 'react';
import axios from "axios";
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Task from '../components/Task';
import TaskAdderModal from '../components/AddTaskModal';
import {Container, CardDeck, Button, Row, Col, Accordion, Card, Dropdown} from 'react-bootstrap';
// import { CardDeck } from 'react-bootstrap';


class GroupDashboard extends Component {
  constructor(props){
    super(props);
    console.log("Props", props.match);
    this.state = {
      tasks: [],
      name: "",
      members: [],
      id: null
    }; 
  }

  componentDidMount(){
    // console.log("User groups", this.props.location.state.userGroups);
    this.setState({id: this.props.match.params.groupId});
    this.loadData(this.props.match.params.groupId);
    this.loadGroupData(this.props.match.params.groupId);
  }

  loadData(groupId){
    //getting the tasks for that group ID
    axios.get(`https://chorescence-api.herokuapp.com/tasks/?groupid=${groupId}`).
    then((response) => {
        console.log("Tasks Data", response);
        this.setState({tasks: response.data});
        // this.
    }).
    catch((error) => {
        console.log(error);
    })
  }

  async loadGroupData(groupid){
    let memberData = [];
    //getting group data 
    await axios.get(`https://chorescence-api.herokuapp.com/group/?id=${groupid}`). 
    then((response) => {
        // console.log("Group data", response);
        this.setState({name: response.data.name});
        response.data.admins.forEach((m) => memberData.push({role:"admin", id: m}));
        response.data.members.forEach((m) => memberData.push({role:"member", id: m}));
    }).
    catch((error) => {
        console.log(error);
    });
    //get data for each user
    for(let i = 0; i < memberData.length; i++){
      // console.log(`We searching! https://chorescence-api.herokuapp.com/user/?id=${groupIds[i]}`);
      await axios.get(`https://chorescence-api.herokuapp.com/user/?id=${memberData[i].id}`). 
      then((response) => {
          // console.log("User data", response);
          memberData[i].name = response.data.name;
      }).
      catch((error) => {
          console.log(error);
      });
    }
    console.log("Members with names", memberData);
    this.setState({members: memberData});
  }

  render() {
    return (
      <Container>
        <Row style={{justifyContent: "space-between"}}>
          <Col>
            <h1>{this.state.name}</h1>
          </Col>
          <Col md="auto">
            <TaskAdderModal/>
            <Link to={{
              state: {
                name: this.state.name,
                members: this.state.members
              },
              pathname: `/group/${this.state.id}/edit`
            }}><Button>Edit Group</Button> </Link>
            <Dropdown as="span">
              <Dropdown.Toggle id="dropdown-basic">
                Switch Group
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/group/1">Group 1</Dropdown.Item>
                <Dropdown.Item href="/group/4">Group 4</Dropdown.Item>
                {/* {this.props.location.state.userGroups && this.props.location.state.userGroups.map((l, i) => 
                  <Dropdown.Item href="#/action-1" key={i}>
                  <Link to={{
                    state: {
                      name: this.state.name,
                      members: this.state.members
                    },
                    pathname: `/group/${l.id}`
                  }}>{l.name}</Link>
                  </Dropdown.Item>)
                } */}
              </Dropdown.Menu>
          </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
            {this.state.tasks && this.state.tasks.
            filter(function (task){
              return !task.completed;
            }).
            map((t, i) => <Task data={t} groupId={this.state.id} members={this.state.members} key={i}/>)}
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col>
          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Show Completed Tasks
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <CardDeck>
                {this.state.tasks && this.state.tasks.
                filter(function (task){
                  return task.completed;
                }).
                map((t, i) => <Task data={t} groupId={this.state.id} members={this.state.members} key={i}/>)}
                </CardDeck>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>  
          </Col>
        </Row>
      </Container>
    );
  }
}

GroupDashboard.propTypes = {
  match: PropTypes.object
};

export default GroupDashboard;