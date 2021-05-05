import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Jumbotron, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';

/**
 * Button/Modal containing the invite message to add a user to the group
 * 
 */
class GroupInviteModal extends Component{
    static propTypes = {
      members:PropTypes.array,
      groupId: PropTypes.string
    }

    constructor(props){
        super(props);
        console.log("Props", props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
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

    render(){
        return (
            <>
              <Button onClick={this.handleShow}>
                Invite Group Member
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Invite Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Send the below invite to add a group member
                    <Jumbotron>
                        Visit <Link to="/joingroup">chorescence.herokuapp.com/joingroup</Link> and
                        enter code: <strong>{this.props.groupId}</strong> to join the group!
                    </Jumbotron>
                </Modal.Body>
              </Modal>
            </>
          );
    }

}

export default GroupInviteModal;