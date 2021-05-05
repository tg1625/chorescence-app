import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';
import TaskForm from './TaskForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-regular-svg-icons'

/**
 * Button/Modal to edit a task
 * 
 * Contains the TaskForm component
 */
class EditTaskModal extends Component{
    static propTypes = {
      members: PropTypes.string,
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
     * Closes modal when user clicks close
     * @public
     */
    handleClose(){
        this.setState({show:false});
    }

    /**
     * Opens modal when the user clicks the Edit Task button
     * @public
     */
    handleShow(){
        this.setState({show:true});
    }

    render(){
        return (
            <>
              <Button variant="link" onClick={this.handleShow} style={{padding: "0"}}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body><TaskForm action="edit" members={this.props.members} groupId={this.props.groupId}></TaskForm></Modal.Body>
              </Modal>
            </>
          );
    }

}

export default EditTaskModal;