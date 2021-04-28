import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'react-bootstrap';

/**
 * Form used to edit or create a new task
 */
class TaskForm extends Component{
    constructor(props) {
        super(props)
        this.handleCreate = this.handleCreate.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handles creation of a new task
     * @param {*} event
     * @public 
     */
    handleCreate(event){
      console.log("Create:", event.target);
      event.preventDefault();
        // alert('You have submitted the form.');
    }

    /**
     * Handles editing a task
     * @param {*} event
     * @public
     */
    handleEdit(event){
      console.log("Edit", event.target);
      event.preventDefault();
      // alert('You have submitted the form.');
    }

    /**
     * Handles form submission
     * 
     * Uses the `action` prop to determine whether to run `handleCreate` or `handleEdit`                                                                                                                                                                                                                                                                                                                                                               
     * @param {*} event 
     * @public
     */
    handleSubmit(event){
      console.log("We submitting");
      if(this.props.action == "add"){
        this.handleCreate(event);
      }
      else{
        this.handleEdit(event);
      } 
    }

    render(){
        return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Task Name</Form.Label>
            <Form.Control type="text" placeholder="Task Name"></Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Task Name</Form.Label>
            <Form.Control type="text" placeholder="Task Description"></Form.Control>
          </Form.Group>
          <Form.Group controlId="assignedTo">
            <Form.Label>Assign to</Form.Label>
                <Form.Control as="select" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" placeholder="Due Date"></Form.Control>
          </Form.Group>
          <Button type="submit" block>
            Submit
          </Button>
        </Form>
          );
    }
}

TaskForm.propTypes = {
  action: PropTypes.string
}

export default TaskForm;