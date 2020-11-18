import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component{
    renderError({error,touched}) {
        if (touched && error){
            return(
                <div className='ui error message'>
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    renderInput=({input,label,meta})=>{
        return (
        <div className="field">
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
        </div>
        );
    }

    onSubmit=(formValues)=>{                    //callback function that we passed to a coponenet and we did not bnd it so just turn into function
        this.props.onSubmit(formValues);
    }
    
    render(){
        return(
           <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
               <Field name='Title' component={this.renderInput} label="Enter Title"/>
               <Field name='Description' component={this.renderInput} label="Enter Description"/>
               <button className='ui button primary'>Submit</button>
           </form>
        );
    }
}


    const validate=(formValues)=>{
        const errors={};
        
        if (!formValues.Title){
            errors.Title = "Please Enter a title"
        }
    
        if (!formValues.Description){
        errors.Description = "Please Enter a description"
    }
    
    return errors;
    };

export default reduxForm(          
    {form:'streamForm',
    validate : validate    
})(StreamForm);
