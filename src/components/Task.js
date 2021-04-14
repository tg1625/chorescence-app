import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

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
            <Card.Footer className="text-muted">
              Assigned to: <strong>{this.props.data.assigned.name}</strong>
              <span className="float-right">Due by:<strong> {this.props.data.dueDate}</strong></span> 
            </Card.Footer>
        </Card>
        // <form className="forms" onSubmit={() => console.log("Submit login")}>
        // <h3>Login</h3>
        // <label htmlFor="loginEmail">Email</label>
        // <input type="email" name="loginEmail" placeholder="Email"/>
        // <label htmlFor="loginPassword">Password</label>
        // <input type="password" name="loginPassword" placeholder="Password"/>
        // <button type="submit">Submit</button>
    // </form>
    )
  }
}

Task.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    dueDate: PropTypes.string,
    description: PropTypes.string,
    assigned: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  })
};


export default Task;