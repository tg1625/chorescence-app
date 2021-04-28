import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Individual comments listed under a task
 */
class Comment extends Component{
    static propTypes = {
        members: PropTypes.array,
        comment: PropTypes.shape({
            commentor: PropTypes.number,
            comment: PropTypes.string
        })
    }

    constructor(props){
        super(props);
        this.state = {
            name: ""
        };
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.members != this.props.members){
            const mem = this.props.members.find((m) => m.id == this.props.comment.commentor);
            mem ? this.setState({name: mem.name}) : this.setState({name: ""});
        }  
    }

    render(){
        return(
            <div ><strong>{this.state.name}: </strong> {this.props.comment.comment}</div>
        )
    }
}

export default Comment;