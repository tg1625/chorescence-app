import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Individual comments listed under a task
 */
class Comment extends Component{
    static propTypes = {
        members: PropTypes.array,
        comment: PropTypes.shape({
            commentor: PropTypes.string,
            comment: PropTypes.string
        })
    }

    constructor(props){
        super(props);
        const mem = this.props.members.find((m) => m.id == this.props.comment.commentor);
        mem ? this.state = {name: mem.name} : this.state = {name: "Unknown"};
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.members != this.props.members){
            this.getName(this.props.members, this.props.comment);
        }  
        
    }

    /**
     * Uses members prop to select the correct name for the comment
     * @param {*} event
     * @public 
    */
    getName(members, comment){
        const mem = members.find((m) => m.id == comment.commentor);
            mem ? this.setState({name: mem.name}) : this.setState({name: "Unknown"});
    }

    render(){
        return(
            <div className="comment"><strong>{this.state.name}: </strong> {decodeURIComponent(this.props.comment.comment)}</div>
        )
    }
}

export default Comment;