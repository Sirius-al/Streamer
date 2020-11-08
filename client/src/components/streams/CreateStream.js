import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createStream } from '../../actions'
import FormForStreams from './FormForStreams';


class CreateStream extends Component {
    

    onFormSubmit = (FieldValues) => {
        this.props.createStream(FieldValues)
    }
    
    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>Create a Stream</h2>
                <FormForStreams onSubmit={this.onFormSubmit}/>
            </div>
        );
    }
}


export default connect(null, { createStream })(CreateStream)

