import React, {Component} from 'react';
import axios from 'axios';
import {Container, Row, Col, Form, Table, Button} from 'react-bootstrap';
import EditGroupNameForm from '../components/EditGroupNameForm';
import EditGroupMembersForm from '../components/EditGroupMembersForm';
// import { Button } from 'bootstrap';

class EditGroup extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        console.log("This props location", this.props.location)
        this.setState({data: this.props.location.state.members});
    }

    render(){
        return(
            <Container>
                <Row>
                    <h1>Edit Group</h1>
                </Row>
                <Row>
                    <Col><EditGroupNameForm members={this.state.data}/></Col>
                </Row>
                <Row>
                    <Col><EditGroupMembersForm members={this.state.data}/></Col>
                </Row>
            </Container> 
        );
    }
}

export default EditGroup;