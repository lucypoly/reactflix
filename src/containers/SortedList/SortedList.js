import { connect } from 'react-redux';
import { toggleMovie } from '../../actions';
import Feed from '../../components/Feed/Feed';

const getSortedList = (movies, filter) => {
    switch (filter) {
        case 'SORT_NONE':
            return movies;
        case 'SORT_BY_YEAR':
            return movies.sort((a, b) => b.release_year - a.release_year);
        case 'SORT_BY_RATING':
            return movies.sort((a, b) => b.rating - a.rating);
    }
};

const mapStateToProps = state => {
    return {
        movies: getSortedList(state.feed.movies, state.sortFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onMovieClick: id => {
            dispatch(toggleMovie(id))
        }
    }
};

const SortedList = connect(mapStateToProps, mapDispatchToProps)(Feed);

export default SortedList;