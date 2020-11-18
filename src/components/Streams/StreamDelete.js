import React from 'react';
import Modal from '../modal';
import history from '../../history';
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    
   renderActions(){
       return(
            <div>
            <button onClick={()=>this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
            <Link to='/' className="ui button">Cancel</Link>
            </div>
       );
    }
    
    renderContent(){
        if(!this.props.stream){
            return 'Are you sure you want to delete the stream?'
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.Title}`
    }
  
   render() { 
        return(
                < Modal 
                Title="Delete Stream"
                Content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=>history.push('/')}
                />
        );
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps,{fetchStream, deleteStream})(StreamDelete);