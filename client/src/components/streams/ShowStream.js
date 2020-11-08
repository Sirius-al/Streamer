import React, { Component } from 'react';
import flv from 'flv.js'
import { connect } from 'react-redux';
import { getStream } from '../../actions';
import { Loader } from 'semantic-ui-react'


class ShowStream extends Component {
    constructor(props) {
        super(props)

        this.videoRef = React.createRef()
    }
    buildPlayer() {
        if (this.player || !this.props.stream) {
          return null;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id * 1}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }
    componentDidMount = () => {
        const currentId = this.props.match.params.id * 1;
        this.props.getStream(currentId);
        this.buildPlayer()
    }
    
    componentDidUpdate() {
        this.buildPlayer()
    }

    componentWillUnmount() {
        this.buildPlayer.destroy();
    }


    render() {
        if (!this.props.stream) {
           return <Loader size='big' style={{marginTop: '30px'}} active inline='centered' />
        }

        return (
            <div style={{textAlign: 'center'}}>
                <video ref={this.videoRef}  style={{width: '100%'}} controls/>
                <h2>{this.props.stream.title}</h2>
                <br/>
                <h3>{this.props.stream.description}</h3>
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

export default connect(mapStateToProps, { getStream })(ShowStream);

