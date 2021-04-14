import React, {Component} from 'react';
import axios from 'axios';
import {Container, ListGroup} from 'react-bootstrap';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            groups: []
        }
    }

    componentDidMount(){
        this.setGroups();
    }

    setGroups(){
        axios.get(`https://chorescence-api.herokuapp.com/user/?id=1`). 
        then((response) => {
            let out = [];
            // console.log(response);
            for(let i = 0; i < response.data.groups.length; i++){
                axios.get(`https://chorescence-api.herokuapp.com/group/?id=${response.data.groups[i]}`).
                then((res) => {
                    // console.log("Group info:",res);
                    out.push({name: res.data.name, id: res.data.id})
                    this.setState({groups: out});
                }).
                catch((error) => {
                    console.log(error);
                })
            }
            // console.log("Full info", out);
        }).
        catch((error) => {
            console.log(error);
        })
    }

    render() {
        console.log("Rendering groups:", this.state.groups);
        return (
        <Container>
            <h1>Groups</h1>
            <ListGroup>
                {this.state.groups && this.state.groups.map((g, i) => <ListGroup.Item key={i}><a href={`group/?group=${g.id}&name=${g.name}`}>{g.name}</a></ListGroup.Item>)}
                <ListGroup.Item><a href="/joingroup">Join a Group</a></ListGroup.Item>
                <ListGroup.Item><a href="/creategroup">Create a Group</a></ListGroup.Item>
            </ListGroup>
        </Container>
        );
    }
}

export default Dashboard;