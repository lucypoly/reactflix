import React, { Component } from 'react';
import styles from './Feed.scss';

import SortLink from '../../containers/SortLink/SortLink';
import MovieItem from '../MovieItem/MovieItem';

class Feed extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         movies: this.props.movies,
    //         date: false,
    //         rating: false
    //     };
    // }
    //
    // componentWillReceiveProps(props) {
    //     this.setState({
    //         movies: props.movies
    //     })
    // }

    // onDateSort = () => {
    //     this.setState({
    //         movies: this.state.movies.sort((a, b) =>
    //         b.release_year - a.release_year),
    //         date: true,
    //         rating: false
    //     })
    // };
    //
    // onRatingSort = () => {
    //     this.setState({
    //         movies: this.state.movies.sort((a, b) =>
    //         b.rating - a.rating),
    //         date: false,
    //         rating: true
    //     })
    // };

    render() {
        const { error, movies, onMovieClick } = this.props;
        // const { movies } = this.state;
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
                                <SortLink filter="SORT_BY_YEAR">
                                    release date
                                </SortLink>
                                <SortLink filter="SORT_BY_RATING">
                                    rating
                                </SortLink>
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
                                <MovieItem
                                    {...this.props}
                                    movie={movie}
                                    onclick={() => onMovieClick(movie.show_id)}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    }
}
export default Feed;