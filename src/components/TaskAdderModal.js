import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';
import TaskForm from './TaskForm.js';

/**
 * Button/Modal for the form to add a task
 * 
 * Actual form is in the TaskForm component
 * 
 */
class TaskAdderModal extends Component{
    static propTypes = {
      members:PropTypes.array,
      groupId: PropTypes.string
    }

    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.state = {
            show: false
        };
    }

    /**
     * Gets called when the user clicks close
     * @public
     */
    handleClose(){
        this.setState({show:false});
    }

    /**
     * Gets called when the user clicks the "Add a Task" button
     * 
     * @public
     */
    handleShow(){
        this.setState({show:true});
    }

    render(){
        return (
            <>
              <Button variant="primary" onClick={this.handleShow}>
                Add a Task
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create a New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body><TaskForm action="add" members={this.props.members} groupId={this.props.groupId}></TaskForm></Modal.Body>
              </Modal>
            </>
          );
    }

}

export default TaskAdderModal;