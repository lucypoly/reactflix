import React, { Component } from 'react';
import styles from './Search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    onSearchBtnClick = () => {
        this.props.setMovie(this.state.name);
        this.props.history.push(this.state.name);
    };

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <div className={styles.container}>
                <h1>Find your movie</h1>
                <input className={styles.input} type="text" value={this.state.name} onChange={this.handleChange} />
                <div className={styles.navigation}>
                    <div className={styles.options}>
                        Search by
                        <button className={styles.option}>title</button>
                        <button className={styles.option}>director</button>
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