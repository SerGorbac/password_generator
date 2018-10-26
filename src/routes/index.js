import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';

class Password extends Component {
    render(){
        return (<h1>Password generator</h1>);
    }
}

// More components
class Settings extends Component {
    render(){
        return (<h1>Generator Settings</h1>);
    }
}


render(
    <Router>
        <Route path="/components/Password" component={Password}/>
        <Route path="/components/Settings" component={Settings}/>
    </Router>,
    document.getElementById('container')
);