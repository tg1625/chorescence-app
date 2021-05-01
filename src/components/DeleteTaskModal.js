import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons'

/**
 * Button/Modal to delete a task
 * 
 */
class DeleteTaskModal extends Component{
    static propTypes = {
      taskId: PropTypes.string,
      groupId: PropTypes.string
    };

    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
     * Opens modal when the user clicks the Delete Task icon
     * @public
     */
    handleShow(){
        this.setState({show:true});
    }

    /**
     * Handles deleting the task
     * @public
     */
    handleDelete(){
      console.log("Deleting task", this.props.taskId);
      axios.delete(`${process.env.REACT_APP_API_URL}/tasks/?groupid=${this.props.groupId}&taskid=${this.props.taskId}`). 
      then((response) => {
          console.log("Task deleted?", response);
          window.location.reload(false);
      }).
      catch((error) => {
          console.log(error);
      });
    }

    render(){
        return (
            <>
              <Button variant="link" onClick={this.handleShow} style={{padding: "0"}}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Body>
                  Are you sure you want to delete this task?<br/>
                  <Button variant="success" onClick={this.handleClose}>No, Keep Task</Button> {" "}
                  <Button variant="danger" onClick={this.handleDelete}>Yes, Delete Task</Button>
                </Modal.Body>
              </Modal>
            </>
          );
    }

}

export default DeleteTaskModal;