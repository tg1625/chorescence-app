import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import Task from '../components/Task';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
// import { CardDeck } from 'react-bootstrap';


class GroupDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
        id: null,
        name: null,
        tasks: []
    }
  }
  componentDidMount(){
    //going through the URL to get the group ID and name
    const loc = this.props.location;
    let groupid;
    if(loc){
      let searchParams = loc.search;
      const urlParams = new URLSearchParams(searchParams);
      groupid = urlParams.get("group");
      this.setState({id: groupid});
      this.setState({name: urlParams.get("name")})
    }
    //getting the tasks for that group ID
    axios.get(`https://chorescence-api.herokuapp.com/tasks/?groupid=${groupid}`) 
    .then(response => {
        console.log(response);
        this.setState({tasks: response.data});
    })
    .catch(error => {
        console.log(error);
    })
  }

  render() {
    return (
      <Container>
        <h1>{this.state.name}</h1>

          <CardDeck>
          {this.state.tasks && this.state.tasks.map((t,i) => (
              <Task  data={t} key={i}/>
            ))}
          </CardDeck>

      </Container>
    );
  }
}

export default withRouter(GroupDashboard);