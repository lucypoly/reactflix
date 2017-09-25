import React, { Component } from 'react';
import styles from './MovieItem.scss';

class MovieItem extends Component {
    render() {
        const { history, movie } = this.props;
        return (
            <div className={styles.item}>
                <img src={movie.poster} alt={movie.show_title} className={styles.thumbnail}
                     onClick={() => history.push(`Film name`)} />
                <div className={styles.description}>
                    <span className={styles.info}>
                      <span className={styles.title}>{movie.show_title}</span>
                      <span className={styles.year}>{movie.release_year}</span>
                    </span>
                    <span className={styles.genre}>{movie.category}</span>
                </div>
            </div>
        );
    }
}
export default MovieItem;