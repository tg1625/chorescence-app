import React, {Component} from 'react';
import axios from "axios";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Task from '../components/Task';
import TaskAdderModal from '../components/AddTaskModal';
import {Container, CardDeck, Button, Row, Col} from 'react-bootstrap';
// import { CardDeck } from 'react-bootstrap';


class GroupDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      name: null,
      members: [],
      id: null
    };
    this.loadData();
  }

  loadData(){
    //going through the URL to get the group ID and name
    const loc = this.props.location;
    let groupid = null;
    if(loc){
      let searchParams = loc.search;
      const urlParams = new URLSearchParams(searchParams);
      groupid = urlParams.get("group");
      this.setState({id: groupid});
      this.setState({name: urlParams.get("name")})
    }
    //getting the tasks for that group ID
    axios.get(`https://chorescence-api.herokuapp.com/tasks/?groupid=${groupid}`). 
    then((response) => {
        console.log(response);
        this.setState({tasks: response.data});
    }).
    catch((error) => {
        console.log(error);
    })
    this.loadGroupMembers(groupid);
  }

  async loadGroupMembers(groupid){
    let groupIds = [];
    //getting group data 
    await axios.get(`https://chorescence-api.herokuapp.com/group/?id=${groupid}`). 
    then((response) => {
        // console.log("Group data", response);
        response.data.admins.forEach((m) => groupIds.push(m));
        response.data.members.forEach((m) => groupIds.push(m));
    }).
    catch((error) => {
        console.log(error);
    });
    console.log("Members", groupIds);
    let memberData = [];
    //get data for each user
    for(let i = 0; i < groupIds.length; i++){
      // console.log(`We searching! https://chorescence-api.herokuapp.com/user/?id=${groupIds[i]}`);
      await axios.get(`https://chorescence-api.herokuapp.com/user/?id=${groupIds[i]}`). 
      then((response) => {
          // console.log("User data", response);
          memberData.push({name: response.data.name, id: response.data.id});
      }).
      catch((error) => {
          console.log(error);
      });
    }
    console.log("Membersss with name", memberData);
    this.setState({members: memberData});
  }

  render() {
    return (
      <Container>
        <Row style={{justifyContent: "space-between"}}>
          <Col>
          <h1>{this.state.name}</h1>
          </Col>
          <Col sm="auto">
          <TaskAdderModal/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
            {this.state.tasks && this.state.tasks.map((t, i) => <Task data={t} groupId={this.state.id} members={this.state.members} key={i}/>)}
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
  }
}

GroupDashboard.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired
  })
};

export default withRouter(GroupDashboard);