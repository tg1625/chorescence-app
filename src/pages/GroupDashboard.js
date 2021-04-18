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
      id: null
    }
  }

  componentDidMount(){
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
            {this.state.tasks && this.state.tasks.map((t, i) => <Task data={t} groupId={this.state.id} key={i}/>)}
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