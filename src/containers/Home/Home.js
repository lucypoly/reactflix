import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Feed from '../Feed/Feed';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import * as feedActions from '../../actions/feedActions';

class Home extends Component {
    render() {
        const { getMovies } = this.props.feedActions;

        return (
            <div>
                <Header>
                    <Search getMovies={getMovies} {...this.props} />
                </Header>
                <Feed {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        title: state.title
    }
}

function mapDispatchToProps(dispatch) {
    return {
        feedActions: bindActionCreators(feedActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
