import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Accordion, Card} from 'react-bootstrap';
import CommentSection from '../components/CommentSection';

class Task extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log("Data", this.props.data);
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{this.props.data.name}</Card.Title>
                <Card.Text>
                {this.props.data.description}
                </Card.Text>
                <Card.Link href="#">Mark Done</Card.Link>
            </Card.Body>
            <CommentSection comments={this.props.data.comments} groupId={this.props.groupId} taskId={this.props.data.id}/>
            <Card.Footer className="text-muted">
              Assigned to: <strong>{this.props.data.assigned.name}</strong>
              <span className="float-right">Due by:<strong> {this.props.data.dueDate}</strong></span> 
            </Card.Footer>
        </Card>
    )
  }
}

Task.propTypes = {
  groupId: PropTypes.number,
  data: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    dueDate: PropTypes.string,
    description: PropTypes.string,
    comments: PropTypes.shape({
      commentor: PropTypes.number,
      comment: PropTypes.string
    }),
    assigned: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  })
};


export default Task;