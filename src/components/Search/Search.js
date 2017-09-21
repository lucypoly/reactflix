import React, {Component} from 'react';
import styles from './Search.scss';

class Search extends Component {
  render() {
    const {history} = this.props;
    return (
        <div className={styles.container}>
          <h1>Find your movie</h1>
          <input className={styles.input} type="text" defaultValue="Film Name"/>
          <div className={styles.navigation}>
            <div className={styles.options}>
              Search by
              <button className={styles.option}>title</button>
              <button className={styles.option}>director</button>
            </div>
            <button
                className={styles.search}
                onClick={() => history.push(`Search value`)}
            >search
            </button>
          </div>
        </div>
    );
  }
}
export default Search;