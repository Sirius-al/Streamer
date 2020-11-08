import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {
    OnAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    ClickOnSignIn = () => {
        this.auth.signIn()
        
    }
    ClickOnSignOut = () => {
        this.auth.signOut()
        
    }

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: '383326817811-ahgc6kpg05pt55t79e0sbt2ncju4lkeb.apps.googleusercontent.com',
                scope:  'email'  //['email', 'profile']
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.OnAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.OnAuthChange)
                
            })
        })
    }
    

    renderAuthBtn() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (<div className="item">
                        <Button onClick={this.ClickOnSignOut} inverted color="orange">
                            <Icon name="sign-out alternate" /> Sign-Out 
                        </Button>
                    </div>)
        } else {
            return (
              <div className="item">
                <Button onClick={this.ClickOnSignIn} inverted color="green">
                  <Icon name="google" /> Sign-In with Google 
                </Button>
                
              </div>
            );
        }
    }


    render() {
        return (
            <div>
                {this.renderAuthBtn()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
