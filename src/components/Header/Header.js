import React, {Component} from 'react';
import styles from './Header.scss';

import Search from './../Search/Search';

class Header extends Component {
  render() {
    return (
        <div className={styles.header}>
          <div className="container-fluid">
            <div className="container">
              <div className={styles.logo}>netflixroulette</div>
              <Search {...this.props}/>
            </div>
          </div>
        </div>
    );
  }
}
export default Header;