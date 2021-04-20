import React, {Component} from 'react';
import axios from 'axios';
import {Container, Row, Col, Form, Table, Button} from 'react-bootstrap';

class EditGroupNameForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log("Edit name:", event.target.name.value);
        event.preventDefault();
          // alert('You have submitted the form.');
      }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <h3>Group Name</h3>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                            Name
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="name"
                            placeholder="Group Name"
                        />
                        </Col>
                        <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                        </Col>
                    </Form.Row>
            </Form>
        );
    }
}

export default EditGroupNameForm;