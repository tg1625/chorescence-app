import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Accordion, Card, Row, Col} from 'react-bootstrap';
import CommentSection from '../components/CommentSection';
import EditTaskModal from '../components/EditTaskModal';

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
    const mem = this.props.members.find((m) => m.id == this.props.data.assigned.id);
    this.state = {
      assigneeName: ""
    };
  }

  /**
   * Loads the correct name for the task assignee
   */
  componentDidUpdate(prevProps, prevState){
    if(prevProps.members != this.props.members){
      //Load name of assignee
      const mem = this.props.members.find((m) => m.id == this.props.data.assigned.id);
      mem ? this.setState({assigneeName: mem.name}) : this.setState({assigneeName: ""});
    }
  }

  render() {
    console.log("Data", this.props.data);
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>
                  <Row>
                    <Col>{this.props.data.name}</Col>
                    <Col sm="auto">
                      <EditTaskModal/>
                    </Col>
                  </Row>  
                </Card.Title>
                <Card.Text>
                {this.props.data.description}
                </Card.Text>
                <Card.Link href="#">Mark Done</Card.Link>
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