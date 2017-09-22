import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../containers/Home/Home';
import styles from './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <div className={styles.content}>
                    <header className="container">
                        <div className={styles.logo}>netflixroulette</div>
                    </header>
                    <Router>
                        <Route exact path="/" render={(props) => <Home {...props} />} />
                    </Router>
                </div>
                <footer>
                    <div className="container">netflixroulette</div>
                </footer>
            </div>
        );
    }
}

export default App;
