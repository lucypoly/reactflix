import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Feed from '../Feed/Feed';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import * as movieActions from '../../actions/movieActions';

class Home extends Component {
    render() {
        const { setMovie } = this.props.movieActions;

        return (
            <div>
                <Header>
                    <Search setMovie={setMovie} {...this.props} />
                </Header>
                <Feed {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movie
    }
}

function mapDispatchToProps(dispatch) {
    return {
        movieActions: bindActionCreators(movieActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
