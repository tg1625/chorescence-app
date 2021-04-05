import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            groups: []
        }
    }
    render() {
        return (
        <div className="mainWrapper">
            <h1>Groups</h1>
            {this.state.groups && this.state.groups.map((g, i) => (
                <div className="card"><a href={`group/?group=${g.id}`}>{g.name}</a></div>
            ))}
            <div className="card"><a href="/joingroup">Join a Group</a></div>
            <div className="card"><a href="/creategroup">Create a Group</a></div>
        </div>
        );
    }
}

export default Dashboard;