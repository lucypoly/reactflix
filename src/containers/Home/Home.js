import React, { Component } from 'react';
import { connect } from 'react-redux';

import Feed from '../../components/Feed/Feed';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import { getMovies } from '../../actions';

class Home extends Component {
    render() {
        const { getMoviesAction, feed } = this.props;

        return (
            <div>
                <Header>
                    <Search getMovies={getMoviesAction} {...this.props} />
                </Header>
                <Feed {...this.props} movies={feed.movies} error={feed.error}
                      fetching={feed.fetching} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        feed: state.feed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMoviesAction: query => {
            dispatch(getMovies(query))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
