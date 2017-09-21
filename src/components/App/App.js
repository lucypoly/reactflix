import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import styles from './App.scss';

import Home from './../Home/Home';

class App extends Component {
  render() {
    return (
        <Router>
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </Router>
    );
  }
}
export default App;