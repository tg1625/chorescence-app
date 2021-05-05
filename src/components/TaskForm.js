import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

/**
 * Form used to edit or create a new task
 */
class TaskForm extends Component{
    static propTypes = {
      members:PropTypes.array,
      groupId: PropTypes.string,
      action: PropTypes.string
    }

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
      const data = {
        name : event.target.name.value,
        groupid: this.props.groupId,
        dueDate: new Date(`${event.target.date.value}T03:24:00`).toLocaleDateString(),
        description: encodeURIComponent(event.target.description.value),
        creationDate: new Date().toLocaleDateString(),
        assigned: event.target.assigned.value
      };
      console.log("Sending", data);
      // axios.post(`https://chorescence-api.herokuapp.com/tasks/?groupid=${this.props.groupId}data=${data}`).
      axios.post(`${process.env.REACT_APP_API_URL}/tasks/?groupid=${this.props.groupId}`, data, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      }).
      then((response) => {
          console.log(response);
          window.location.reload(false);
      }).
      catch((error) => {
          console.log(error);
      })
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
            <Form.Label>Task Description</Form.Label>
            <Form.Control type="text" placeholder="Task Description"></Form.Control>
          </Form.Group>
          <Form.Group controlId="assigned">
            <Form.Label>Assign to</Form.Label>
                <Form.Control as="select" custom>
                  {this.props.members && this.props.members.map((m, i) =>
                    <option value={m.id} key={i}>{m.name}</option>)}
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

export default TaskForm;