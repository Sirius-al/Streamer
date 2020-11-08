import React, { Component , Fragment } from 'react';
import { getStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom'

import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux';
 
class DeleteStream extends Component{

    componentDidMount() {
        const currentStreamID = this.props.match.params.id * 1;
        this.props.getStream(currentStreamID)
    }
    

    // onClickDelete() {
    //     this.props.deleteStream(this.props.match.params.id * 1)
    // }

    renderActions() {
        return (
            <Fragment>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui red button">Delete</button>
                <Link to='/' className="ui grey button">Cancel</Link>
            </Fragment>
        )
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Title'
        }

        return `${this.props.stream.title}`
    }
    
    render() {

        return (

            <Modal
                title='Delete Stream'
                content="Are Your Sure that You want to Delete The Stream ?"
                content2={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />

        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const currentStreamID = ownProps.match.params.id * 1;
    return {
        stream: state.stream[currentStreamID]
    }
}


export default connect(mapStateToProps, { getStream, deleteStream })(DeleteStream);
