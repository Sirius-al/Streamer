import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react'
import _ from 'lodash'

import { getStream, editStream } from '../../actions'
import FormForStreams from './FormForStreams';


class EditStream extends Component {

    componentDidMount() {
        const currentStreamID = this.props.match.params.id * 1;
        this.props.getStream(currentStreamID)
    }

    onFormSubmit = (fieldValues) => {
        this.props.editStream(this.props.match.params.id, fieldValues)
    }

    render() {
        // console.log(this.props)
        if (!this.props.stream) {
           return <Loader size='big' style={{marginTop: '30px'}} active inline='centered' />
        }

        return (
            <div>
                {/* { this.props.stream.title } */}
                <h2>Edit the Stream</h2>
                <FormForStreams 
                initialValues={_.pick(this.props.stream, 'title', 'description')}
                onSubmit={this.onFormSubmit}
                />
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const currentStreamID = ownProps.match.params.id * 1;
    return {
        stream: state.stream[currentStreamID]
    }
}

export default connect(mapStateToProps, { getStream, editStream })(EditStream);
