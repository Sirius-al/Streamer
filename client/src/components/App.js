import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from '../history';

import Header from './Header'
import ListStreams from './streams/ListStreams'
import CreateStream from './streams/CreateStream'
import DeleteStream from './streams/DeleteStream'
import ShowStream from './streams/ShowStream'
import EditStream from './streams/EditStream'


const App = () => {
    
    return (
        <div>
            <Router history={history}>
                <Header />
                <div className="ui container">
                    <Switch>
                        <Route path='/' exact component={ListStreams} />
                        <Route path='/streams/new' exact component={CreateStream} />
                        <Route path='/streams/edit/:id' exact component={EditStream} />
                        <Route path='/streams/:id' exact component={ShowStream} />
                        <Route path='/streams/delete/:id' exact component={DeleteStream} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}


export default App;

//! Client-id => 383326817811-ahgc6kpg05pt55t79e0sbt2ncju4lkeb.apps.googleusercontent.com