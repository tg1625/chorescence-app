import React, {Component} from 'react';
import axios from 'axios';
import {Container, ListGroup} from 'react-bootstrap';
import {
    Redirect,
    Link
  } from "react-router-dom";

class Dashboard extends Component {
    constructor(props){
        super(props);
        console.log("Dash props", props);
        this.state = {
            userInfo: JSON.parse(localStorage.getItem("user")),
            groups: []
        }
    }

    componentDidMount(){
        this.setGroups();
    }

    setGroups(){
        axios.get(`${process.env.REACT_APP_API_URL}/user/groups/?id=${this.state.userInfo.id}`). 
        then((response) => {
            console.log("Getting groups", response.data);
            this.setState({groups: response.data});
        }).
        catch((error) => {
            console.log(error);
        })
    }

    render() {
        console.log("Rendering groups:", this.state.groups);
        return (
        <>
        {this.state.userInfo && Object.keys(this.state.userInfo).length > 0 ? null : <Redirect to="/" /> }
        <Container>
            <h1>Groups</h1>
            <ListGroup>
                {this.state.groups && this.state.groups.map((g, i) => 
                    <ListGroup.Item key={i}>
                        <Link to={{
                            state: {
                                userGroups: this.state.groups
                            },
                            pathname: `/group/${g.id}`
                        }}>{g.name}</Link>
                    </ListGroup.Item>)}
                <ListGroup.Item><a href="/joingroup">Join a Group</a></ListGroup.Item>
                <ListGroup.Item><a href="/creategroup">Create a Group</a></ListGroup.Item>
            </ListGroup>
        </Container>
        </>
        );
    }
}

export default Dashboard;