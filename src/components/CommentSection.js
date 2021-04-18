import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Accordion, Card} from 'react-bootstrap';
import CommentForm from './CommentForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-regular-svg-icons'

class CommentSection extends Component{
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
                        <div key={i}>{c.commentor}: {c.comment}</div>)
                    }
                    <CommentForm groupId={this.props.groupId} taskId={this.props.taskId}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        ); 
    }
}

CommentSection.propTypes = {
    taskId: PropTypes.number,
    groupId: PropTypes.number,
    comments: PropTypes.shape({
        commentor: PropTypes.number,
        comment: PropTypes.string
      })
}

export default CommentSection;