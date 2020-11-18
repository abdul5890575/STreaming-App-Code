import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';


class StreamEdit extends React.Component{
    // every component should fetch its own data wth react router or data might not exist
    //class based this.props function props
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit =(formValues)=>{
        this.props.editStream(this.props.match.params.id,formValues);
    };

    render(){
        if (!this.props.stream){
            return <div>Loading</div>
        }
        return(
            <div >
                <h3>Edit a Stream</h3>
               <StreamForm initialValues={_.pick(this.props.stream,'Title','Description')} onSubmit={this.onSubmit}/> 
            </div>
        );
    }
}

// _.pick to pick only certain values that backend servers would expect from the whole onject stream that contains id,userid etc
//ownProps to get props in the function and not the redux-store, match one of ts property
const mapStateToProps = (state,ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}; //[] cuz object not array
  };

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);




