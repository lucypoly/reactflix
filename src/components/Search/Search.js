import React, { Component } from 'react';
import styles from './Search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            title: true,
            director: false,
        };
    }

    onTitleChanged = () => {
        this.setState({
            title: true,
            director: false
        });
    };

    onDirectorChanged = () => {
        this.setState({
            director: true,
            title: false
        });
    };

    onSearchBtnClick = () => {
        this.state.title ?
            this.props.getMovies(`title=${this.state.query}`) :
            this.props.getMovies(`director=${this.state.query}`);
        // this.props.history.push(`search/${this.state.query}`);
    };

    handleChange = (event) => {
        this.setState({ query: event.target.value });
    };

    render() {
        const { title, director } = this.state;
        return (
            <div className={styles.container}>
                <h1>Find your movie</h1>
                <input
                    className={styles.input}
                    type="text"
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <div className={styles.navigation}>
                    <div className={styles.options}>
                        Search by
                        <button className={`${styles.option} ${title ? styles.active : ''}`}
                                onClick={this.onTitleChanged}>title
                        </button>
                        <button className={`${styles.option} ${director ? styles.active : ''}`}
                                onClick={this.onDirectorChanged}>director
                        </button>
                    </div>
                    <button
                        className={styles.search}
                        onClick={this.onSearchBtnClick}
                    >search
                    </button>
                </div>
            </div>
        );
    }
}
export default Search;