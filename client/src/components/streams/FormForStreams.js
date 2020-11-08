import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class FormForStreams extends Component {

    renderError({ touched, visited, error }) {
        if (touched && visited && error) {
            return <div className="ui pointing red small label">{error}</div>
        }
    }

    

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.touched && formProps.meta.error ? 'error': ''}`
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input type="text" {...formProps.input} />
                {this.renderError(formProps.meta)}
            </div>
          )
    }

    onFormSubmit = (FieldValues) => {
        this.props.onSubmit(FieldValues)
    }
    
    render = () => {
        return (
            <div className='ui grid'>
                <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form error twelve wide column">
                    <Field
                      name="title"
                      component={this.renderInput} 
                      label="Enter a title For the Stream"/>
                    <Field
                      name="description"
                      component={this.renderInput}
                      label="Enter a Description of the Stream"/>
                     <button className="ui button green">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (FieldValues) => {
    const errors = {};
    if (!FieldValues.title) {
        errors.title = 'Your Stream must have a Title'
    }
    if (!FieldValues.description) {
        errors.description = 'Your Stream must have a Description'
    }

    return errors;
}

export default reduxForm({
    form: 'FormForStreams',
    validate
})(FormForStreams);


