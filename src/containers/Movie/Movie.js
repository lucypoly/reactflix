import React, { Component } from 'react';
import { connect } from 'react-redux'

import styles from './Movie.scss';

import MovieDetails from './../../components/MovieDetails/MovieDeatils';

class Movie extends Component {
    render() {
        const { movie } = this.props.movie;

        return (
            <MovieDetails title={movie.title} description={movie.description} />
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps)(Movie);
