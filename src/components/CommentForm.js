import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';

/**
 * Form to create a new comment
 */
class CommentForm extends Component{
    static propTypes = {
        taskId: PropTypes.number,
        groupId: PropTypes.number
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
        console.log(event.target.comment.value);

        //API Calls 
        axios.patch(`https://chorescence-api.herokuapp.com/tasks/?groupid=${this.props.groupId}&taskid=${this.props.taskId}`). 
        then((response) => {
            console.log(response);
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