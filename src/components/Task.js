import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Row, Col} from 'react-bootstrap';
import CommentSection from '../components/CommentSection';
import axios from 'axios';
import DeleteTaskModal from './DeleteTaskModal';

/**
 * Component for each individual task card
 * 
 * Contains the EditTaskModal and CommentSection components
 */
class Task extends Component {
  static propTypes = {
    members: PropTypes.array,
    groupId: PropTypes.string,
    data: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      dueDate: PropTypes.string,
      description: PropTypes.string,
      completed: PropTypes.bool,
      comments: PropTypes.array,
      assigned: PropTypes.string
    })
  };

  constructor(props){
    super(props);
    this.state = {
      completed: this.props.data.completed,
      assigneeName: ""
    };
  }

  /**
   * Loads the correct name for the task assignee
   */
  componentDidUpdate(prevProps){
    if(prevProps.members != this.props.members){
      //Load name of assignee
      const mem = this.props.members.find((m) => m.id == this.props.data.assigned);
      mem ? this.setState({assigneeName: mem.name}) : this.setState({assigneeName: ""});
    }
  }


  /**
   * Handles marking task as complete
   * @returns 
   */
  markComplete(setting){
    // console.log("Marked!");
    // axios.patch(`http://localhost:3000/tasks/?groupid=${this.props.groupId}&taskid=${this.props.data.id}`, {completed:setting}, {
    axios.patch(`${process.env.REACT_APP_API_URL}/tasks/?groupid=${this.props.groupId}&taskid=${this.props.data.id}`, {completed:setting}, {
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
  }

  render() {
    // console.log("Task Data", this.props.data);
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                  <Row>
                    <Col>{decodeURIComponent(this.props.data.name)}</Col>
                    <Col sm="auto">
                      {/* <EditTaskModal members={this.props.members} groupId={this.props.groupId}/> */}
                      <DeleteTaskModal groupId={this.props.groupId} taskId={this.props.data.id}/>
                    </Col>
                  </Row>  
                </Card.Title>
                <Card.Text>
                {decodeURIComponent(this.props.data.description)}
                </Card.Text>
                {this.props.data.completed 
                ? <Card.Link as={Button} variant="link" onClick={this.markComplete.bind(this, false)} href="#">Mark Incomplete</Card.Link>
                : <Card.Link as={Button} variant="link" onClick={this.markComplete.bind(this, true)} href="#">Mark Complete</Card.Link>
                }
            </Card.Body>
            <CommentSection comments={this.props.data.comments} groupId={this.props.groupId} taskId={this.props.data.id} members={this.props.members}/>
            <Card.Footer className="text-muted">
              <Row>
                <Col>Assigned to: <strong>{this.state.assigneeName}</strong></Col>
                <Col>Due by:<strong> {this.props.data.dueDate}</strong></Col>
              </Row> 
            </Card.Footer>
        </Card>
    )
  }
}

export default Task;