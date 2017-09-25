import React, { Component } from 'react';
import styles from './Feed.scss';

import MovieItem from '../MovieItem/MovieItem';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies,
            date: false,
            rating: false
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            movies: props.movies
        })
    }

    onDateSort = () => {
        this.setState({
            movies: this.state.movies.sort((a, b) =>
            b.release_year - a.release_year),
            date: true,
            rating: false
        })
    };

    onRatingSort = () => {
        this.setState({
            movies: this.state.movies.sort((a, b) =>
            b.rating - a.rating),
            date: false,
            rating: true
        })
    };

    render() {
        const { error } = this.props;
        const { movies, date, rating } = this.state;
        return (
            <div>
                {!!movies.length && (
                    <div className={`container-fluid ${styles.nav}`}>
                        <div className={`container ${styles.flexBetween}`}>
                            <div>
                                {`${movies.length} movie${movies.length > 1 ? 's' : ''} found`}
                            </div>
                            <div>
                                Sort by
                                <button
                                    className={`${styles.option} ${date ? styles.active : ''}`}
                                    onClick={this.onDateSort}>release date
                                </button>
                                <button className={`${styles.option} ${rating ? styles.active : ''}`}
                                        onClick={this.onRatingSort}>rating
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="container">
                    {(!movies.length || error) && (
                        <div className={styles.empty}>No films found</div>
                    )}
                    {!!movies.length && (movies.map((movie) => (
                            <div key={movie.show_id} className={styles.wrapper}>
                                <MovieItem {...this.props} movie={movie} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    }
}
export default Feed;