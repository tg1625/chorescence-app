import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            groups: []
        }
    }
    componentDidMount(){
        axios.get(`https://chorescence-api.herokuapp.com/user/?id=1`) 
        .then(response => {
            let out = [];
            // console.log(response);
            for(let i = 0; i < response.data.groups.length; i++){
                axios.get(`https://chorescence-api.herokuapp.com/group/?id=${response.data.groups[i]}`)
                .then(res => {
                    // console.log("Group info:",res);
                    out.push({id: res.data.id, name: res.data.name})
                    this.setState({groups: out});
                })
                .catch(error => {
                    console.log(error);
                })
            }
            // console.log("Full info", out);
        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        console.log("Rendering groups:",this.state.groups);
        const gs = this.state.groups.map(function(g){
            return <div className="card"><a href={`group/?group=${g.id}`}>{g.name}</a></div>;
          });
        return (
        <div className="mainWrapper">
            <h1>Groups</h1>
            {gs}
            <div className="card"><a href="/joingroup">Join a Group</a></div>
            <div className="card"><a href="/creategroup">Create a Group</a></div>
        </div>
        );
    }
}

export default Dashboard;