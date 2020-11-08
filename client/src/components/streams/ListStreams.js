import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getStreams } from '../../actions'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

class ListStreams extends Component {

    componentDidMount() {
        this.props.getStreams()
    }


    renderconfigBtns(stream) {
        if (stream.UserId === this.props.currentUserId) {
          return(
            <div className="right floated content">
                <Link to={`/streams/edit/${stream.id}`}>
                    <Button icon labelPosition="left" color="blue">
                        <Icon name="edit" />
                        Edit
                    </Button>
                </Link>

                <Link to={`/streams/delete/${stream.id}`}>
                    <Button icon labelPosition="left" color="red">
                        <Icon name="remove" />
                        Delete
                    </Button>
                </Link>

                
            </div>
          )
        }
    }


    renderList = () => {
        return this.props.streams.map(stream => {
            return (
              <div className="item" key={stream.id}>
                {this.renderconfigBtns(stream)}
                <List.Icon name="camera" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header>
                      <Link to={`/streams/${stream.id}`}>
                        {stream.title}
                      </Link>
                  </List.Header>
                  <List.Description>{stream.description}</List.Description>
                </List.Content>
              </div>
            );
        })

    }

    renderCreateBtn() {
        if (this.props.isSignedIn) {
            return (
                <div className="" >
                    <hr/>
                    <Link to="/streams/new">
                        <Button style={{marginTop: '10px', float: 'right'}} icon labelPosition="right" color="green">
                            <Icon name="add" />
                            Create Stream
                        </Button>
                    </Link>
                </div>
            )
        }
    }
    
    render() {
        return (
            <div className='ui middle aligned divided list'>
                <h1>Streams</h1>
                {this.renderList()}
                {this.renderCreateBtn()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.stream),
        currentUserId: state.auth.UserId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { getStreams })(ListStreams);
