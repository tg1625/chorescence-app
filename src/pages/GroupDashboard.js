import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';


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
  //function to get all the tasks for a group
  loadTasks(){
    return this.state.tasks.map(function(t){
        return (
        <div className="task">
          <h2>{t.name}</h2>
          <p>{t.description}</p>
        </div>)
        ;
      });
  }
  render() {
    const ts = this.loadTasks();
    return (
      <div className="mainWrapper">
        <h1>{this.state.name}</h1>
        <div className="tasksWrapper">
            {ts}
        </div>

      </div>
    );
  }
}

export default withRouter(GroupDashboard);