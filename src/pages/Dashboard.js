import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            groups: [{"id": "123456", "name": "Testing Group 1"}, 
                    {"id": "789012", "name": "Testing Group 2"}
        ]
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