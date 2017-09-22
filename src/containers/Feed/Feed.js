import React, {Component} from 'react';
import styles from './Feed.scss';

import MovieItem from '../../components/MovieItem/MovieItem';

class Feed extends Component {
  render() {
    return (
        <div className="container">
          <div className={styles.wrapper}>
            <MovieItem {...this.props}/>
          </div>
        </div>
    );
  }
}
export default Feed;