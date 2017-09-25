import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Feed from '../../components/Feed/Feed';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import * as feedActions from '../../actions/feedActions';

class Home extends Component {
    render() {
        const { getMovies } = this.props.feedActions;
        const { feed } = this.props;

        return (
            <div>
                <Header>
                    <Search getMovies={getMovies} {...this.props} />
                </Header>
                <Feed {...this.props} movies={feed.movies} error={feed.error} fetching={feed.fetching} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        feed: state.feed
    }
}

function mapDispatchToProps(dispatch) {
    return {
        feedActions: bindActionCreators(feedActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
