import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import EditGroupNameForm from '../components/EditGroupNameForm';
import EditGroupMembersForm from '../components/EditGroupMembersForm';

class EditGroup extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        console.log("This props location", this.props.location);
        console.log("props mathch", this.props.match.params.groupId);
        this.setState({data: this.props.location.state.members});
    }

    render(){
        return(
            <Container>
                <Row>
                <Link to={`/group/${this.props.match.params.groupId}`}>{"<"} Back to Dashboard</Link>
                </Row>
                <Row>
                    <h1>Edit Group</h1>
                </Row>
                <Row>
                    <Col><EditGroupNameForm members={this.state.data}/></Col>
                </Row>
                <Row>
                    <Col><EditGroupMembersForm groupId={this.props.match.params.groupId} members={this.state.data}/></Col>
                </Row>
            </Container> 
        );
    }
}

export default EditGroup;