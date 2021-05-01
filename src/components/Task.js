import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Accordion, Button, Card, Row, Col} from 'react-bootstrap';
import CommentSection from '../components/CommentSection';
import EditTaskModal from '../components/EditTaskModal';
import axios from 'axios';

/**
 * Component for each individual task card
 * 
 * Contains the EditTaskModal and CommentSection components
 */
class Task extends Component {
  static propTypes = {
    members: PropTypes.array,
    groupId: PropTypes.number,
    data: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      dueDate: PropTypes.string,
      description: PropTypes.string,
      comments: PropTypes.array,
      assigned: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number
      })
    })
  };

  constructor(props){
    super(props);
    // this.markComplete = this.markComplete.bind(this);
    const mem = this.props.members.find((m) => m.id == this.props.data.assigned.id);
    this.state = {
      completed: this.props.data.completed,
      assigneeName: ""
    };
  }

  /**
   * Loads the correct name for the task assignee
   */
  componentDidUpdate(prevProps, prevState){
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
    axios.patch(`https://chorescence-api.herokuapp.com/tasks/?groupid=${this.props.groupId}&taskid=${this.props.data.id}`, {completed:true}, {
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
    console.log("Task Data", this.props.data);
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                  <Row>
                    <Col>{decodeURIComponent(this.props.data.name)}</Col>
                    <Col sm="auto">
                      <EditTaskModal members={this.props.members} groupId={this.props.groupId}/>
                    </Col>
                  </Row>  
                </Card.Title>
                <Card.Text>
                {decodeURIComponent(this.props.data.description)}
                </Card.Text>
                {this.props.data.completed 
                ? <Card.Link as={Button} variant="link" onClick={this.markComplete.bind(this, false)} href="#">Mark Incomplete</Card.Link>
                : <Card.Link as={Button} variant="link" onClick={this.markComplete.bind(this, true)} href="#">Mark Done</Card.Link>
                }
            </Card.Body>
            <CommentSection comments={this.props.data.comments} groupId={this.props.groupId} taskId={this.props.data.id} members={this.props.members}/>
            <Card.Footer className="text-muted">
              Assigned to: <strong>{this.state.assigneeName}</strong>
              <span className="float-right">Due by:<strong> {this.props.data.dueDate}</strong></span> 
            </Card.Footer>
        </Card>
    )
  }
}

export default Task;