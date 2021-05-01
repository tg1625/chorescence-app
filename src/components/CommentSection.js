import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Accordion, Card} from 'react-bootstrap';
import CommentForm from './CommentForm';
import Comment from './Comment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-regular-svg-icons'

/**
 * Section for task comments
 * 
 * Contains Comment and CommentForm components
 */
class CommentSection extends Component{
    static propTypes = {
        taskId: PropTypes.string,
        members: PropTypes.array,
        groupId: PropTypes.string,
        comments: PropTypes.array
    }

    render(){
        return(
            <Accordion>
            <Card style={{margin: '0'}}>
                <Accordion.Toggle as={Card.Header} eventKey="0" >
                    Show Comments{" "}
                    <FontAwesomeIcon icon={faComment} />
                    
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    {this.props.comments && this.props.comments.map((c, i) =>
                    <Comment key={i} comment={c} members={this.props.members} />)
                    }
                    <CommentForm groupId={this.props.groupId} taskId={this.props.taskId}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        ); 
    }
}

export default CommentSection;