import React, {Component} from 'react';
import styles from './MovieItem.scss';

class MovieItem extends Component {
  render() {
    const {history} = this.props;
    return (
        <div className={styles.item}>
          <div className={styles.thumbnail} onClick={() => history.push(`Film name`)}/>
          <div className={styles.description}>
            <span className={styles.info}>
              <span className={styles.title}>title</span>
              <span className={styles.year}>1994</span>
            </span>
            <span className={styles.genre}>genre</span>
          </div>
        </div>
    );
  }
}
export default MovieItem;