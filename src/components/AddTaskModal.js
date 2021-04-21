import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';
import TaskForm from './TaskForm.js';


class TaskAdderModal extends Component{
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.state = {
            show: false
        };
    }

    handleClose(){
        this.setState({show:false});
    }

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
                <Modal.Body><TaskForm action="add"></TaskForm></Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer> */}
              </Modal>
            </>
          );
    }

}

export default TaskAdderModal;