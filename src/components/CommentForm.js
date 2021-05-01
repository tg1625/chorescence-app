import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';

/**
 * Form to create a new comment
 */
class CommentForm extends Component{
    static propTypes = {
        taskId: PropTypes.string,
        groupId: PropTypes.string
    }
    
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /**
     * Handles submission of the form to create a new comment
     * @param {} event 
     * @public
     */
    handleSubmit(event){
        event.preventDefault();
        const data = {
            taskid: this.props.taskId,
            commentor: JSON.parse(localStorage.getItem("user")).id,
            comment: encodeURIComponent(event.target.comment.value)
        };
        //API Calls 
        axios.patch(`${process.env.REACT_APP_API_URL}/tasks/?groupid=${this.props.groupId}&taskid=${this.props.taskId}`, data, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          }).
        then((response) => {
            console.log("Reponse for task making", response);
            window.location.reload(false);
        }).
        catch((error) => {
            console.log(error);
        });
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="comment">
            <Form.Control size="sm" type="text" placeholder="Add a Comment"></Form.Control>
          </Form.Group>
          <Button type="submit" block>
            Submit
          </Button>
        </Form>
        ); 
    }
}

export default CommentForm;