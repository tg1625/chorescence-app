import React, {Component} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import GroupInviteModal from './GroupInviteModal';
import PropTypes from 'prop-types';

/**
 * Form to edit members of a group
 */
class EditGroupMembersForm extends Component{
    static propTypes = {
        members:PropTypes.array,
        groupId: PropTypes.string
      }
      
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * handles form submission
     * @param {} event
     * @public  
     */
    handleSubmit(event){
        console.log("Edit:", event.target);
        event.preventDefault();
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
            <h3>Group Members</h3>
            <Row><GroupInviteModal groupId={this.props.groupId}/></Row>
                    <Row>
                        <Col sm="4"><h5>Name</h5></Col>
                        <Col sm="4"><h5>Role</h5></Col>
                        <Col sm="4"></Col>
                    </Row>
                    
                {this.props.members && this.props.members.map((t, i) => 
                    
                    <Form.Group as={Row} controlId="formPlaintextEmail" key={i}>
                      <Form.Label column sm="4">
                        {t.name}
                      </Form.Label>
                      <Col sm="4">
                      <Form.Control as="select">
                        <option>Select</option>
                        <option>Admin</option>
                        <option>Member</option>
                    </Form.Control>
                      </Col>
                      <Col sm="4">
                          <Button block>Delete</Button>
                      </Col>
                    </Form.Group>)
                    }
                <Button type="submit" block>
                    Save Changes
                  </Button>
                </Form>
        );
    }
}

export default EditGroupMembersForm;