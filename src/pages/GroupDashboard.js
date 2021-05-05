import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Task from '../components/Task';
import TaskAdderModal from '../components/TaskAdderModal';
import {Container, CardColumns, Button, Row, Col, Accordion, Card} from 'react-bootstrap';
// import { CardDeck } from 'react-bootstrap';

class GroupDashboard extends Component {
  static propTypes = {
    match: PropTypes.object
  };

  constructor(props){
    super(props);
    this.state = {
      userInfo: JSON.parse(localStorage.getItem("user")),
      tasks: [],
      name: "",
      members: [],
      id: null
    }; 
  }

  componentDidMount(){
    // console.log("User groups", this.props.location.state.userGroups);
    console.log("Group props", this.props);
    this.setState({id: this.props.match.params.groupId});
    this.loadData(this.props.match.params.groupId);
    this.loadGroupData(this.props.match.params.groupId);
  }

  loadData(groupId){
    //getting the tasks for that group ID
    axios.get(`${process.env.REACT_APP_API_URL}/tasks/?groupid=${groupId}`).
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
    await axios.get(`${process.env.REACT_APP_API_URL}/group/?id=${groupid}`). 
    then((response) => {
        console.log("Group data", response);
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
      await axios.get(`${process.env.REACT_APP_API_URL}/user/?id=${memberData[i].id}`). 
      then((response) => {
          console.log("User data", response);
          memberData[i].name = response.data.fname;
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
        <Row>
          <Link to={`/`}>{"<"} Back to Groups</Link>
        </Row>
        <Row style={{justifyContent: "space-between"}}>
          <Col>
            <h1>{this.state.name}</h1>
          </Col>
          <Col md="auto">
            <TaskAdderModal members={this.state.members} groupId={this.state.id}/>
            <Link to={{
              state: {
                name: this.state.name,
                members: this.state.members
              },
              pathname: `/group/${this.state.id}/edit`
            }}><Button>Edit Group</Button> </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardColumns>
            {this.state.tasks && this.state.tasks.
            filter(function (task){
              return !task.completed;
            }).
            map((t, i) => <Task data={t} groupId={this.state.id} members={this.state.members} key={i}/>)}
            </CardColumns>
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
                <CardColumns>
                {this.state.tasks && this.state.tasks.
                filter(function (task){
                  return task.completed;
                }).
                map((t, i) => <Task data={t} groupId={this.state.id} members={this.state.members} key={i}/>)}
                </CardColumns>
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

export default GroupDashboard;